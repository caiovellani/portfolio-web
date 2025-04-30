'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
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

  async function onSubmit() {
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
      className="h-full relative overflow-hidden flex font-poppins"
    >
      <div className="flex flex-col items-center justify-center min-h-screen p-4 w-full">
        <div className="p-4 mb-12">
          <h1 className="text-[48px] xl:text-[80px] leading-[1.1] font-semibold text-center">
            Contato
          </h1>
          <p className="text-center font-medium text-zinc-50/60 mt-4 leading-tight md:leading-relaxed">
            Feel free to reach out if you have any questions or if there&apos;s
            an opportunity where I can add value!
          </p>
        </div>

        <div className="w-full max-w-[360px] xl:max-w-[550px] bg-[#18181B] rounded-2xl p-2 gap-4 flex flex-col">
          <Input
            {...register('name')}
            placeholder="Your name"
            className="rounded-lg border border-accent focus-visible:ring-1 focus-visible:ring-accent transition-all duration-300 placeholder:text-zinc-400 p-5"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}

          <Input
            {...register('email')}
            placeholder="Your email"
            className="rounded-lg border border-accent focus-visible:ring-1 focus-visible:ring-accent transition-all duration-300 placeholder:text-zinc-400 p-5"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}

          <Input
            {...register('subject')}
            placeholder="Your subject"
            className="rounded-lg border border-accent focus-visible:ring-1 focus-visible:ring-accent transition-all duration-300 placeholder:text-zinc-400 p-5"
          />
          {errors.subject && (
            <span className="text-red-500 text-sm">
              {errors.subject.message}
            </span>
          )}

          <Textarea
            {...register('message')}
            placeholder="Your Message"
            className="rounded-lg p-5 border border-accent focus-visible:ring-1 focus-visible:ring-accent transition-all duration-300 placeholder:text-zinc-400 h-32 xl:h-[200px]"
          />
          {errors.message && (
            <span className="text-red-500 text-sm">
              {errors.message.message}
            </span>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full p-4 hover:bg-hover border border-accent rounded-lg bg-accent text-black text-base font-semibold transition-all duration-300"
          >
            {isSubmitting ? 'Sending...' : 'Send'}
          </Button>
        </div>
      </div>
    </form>
  )
}
