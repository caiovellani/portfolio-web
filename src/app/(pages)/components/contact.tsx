'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import { toast } from 'sonner'
import { showSuccessToast } from '@/components/toast/toast-success'
import { showErrorToast } from '@/components/toast/toast-error'

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email').min(1, 'Email is required'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(1, 'Message is required'),
})

type ContactFormData = z.infer<typeof contactSchema>

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  async function onSubmit(data: ContactFormData) {
    if (!formRef.current) return

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      showSuccessToast()
      reset()
    } catch (err) {
      showErrorToast()
      console.error('error sending email', err)
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit(onSubmit)}
      id="contact"
      className="h-full relative overflow-hidden p-4 flex font-poppins"
    >
      <div className="absolute inset-0 z-0 bg-grid pointer-events-none" />
      <div className="container mx-auto min-h-screen">
        <div className="container h-full pt-8 flex flex-col items-center justify-center mx-auto gap-6">
          <div className="p-4 mb-12">
            <h1 className="text-[48px] xl:text-[80px] leading-[1.1] font-semibold text-center">
              Contato
            </h1>
            <p className="text-center font-medium text-zinc-50/60 mt-4 leading-tight md:leading-relaxed">
              Feel free to reach out if you have any questions or if there's an
              opportunity where I can add value!
            </p>
          </div>

          <div className="w-[360px] h-dvw xl:w-[550px] xl:h-[450px] bg-[#18181B] rounded-2xl p-2 gap-3 xl:gap-3 flex flex-col">
            <Input
              {...register('name')}
              className="rounded-lg focus-visible:outline-none border border-accent focus-visible:ring-1 focus-visible:ring-accent focus:ring-0 focus:outline-none p-5"
              placeholder="Your name"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}

            <Input
              {...register('email')}
              className="rounded-lg focus-visible:outline-none border border-accent focus-visible:ring-1 focus-visible:ring-accent focus:ring-0 focus:outline-none p-5"
              placeholder="Your email"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}

            <Input
              {...register('subject')}
              className="rounded-lg focus-visible:outline-none border border-accent focus-visible:ring-1 focus-visible:ring-accent focus:ring-0 focus:outline-none p-5"
              placeholder="Your subject"
            />
            {errors.subject && (
              <span className="text-red-500 text-sm">
                {errors.subject.message}
              </span>
            )}

            <Textarea
              {...register('message')}
              placeholder="Message"
              className="rounded-lg focus-visible:outline-none border border-accent focus-visible:ring-1 focus-visible:ring-accent focus:ring-0 focus:outline-none xl:h-[300px] h-full"
            />
            {errors.message && (
              <span className="text-red-500 text-sm">
                {errors.message.message}
              </span>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full border p-5 hover:bg-hover border-accent rounded-lg bg-accent text-black"
            >
              {isSubmitting ? 'Sending...' : 'Send'}
            </Button>
          </div>
        </div>
      </div>
    </form>
  )
}
