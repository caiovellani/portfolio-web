'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email').min(1, 'Email is required'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(1, 'Message is required'),
})

type ContactFormData = z.infer<typeof contactSchema>

export function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  return (
    <form
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
              className="rounded-lg focus-visible:outline-none border border-accent focus-visible:ring-1 focus-visible:ring-accent focus:ring-0 focus:outline-none p-5"
              placeholder="Your name"
            />

            <Input
              className="rounded-lg focus-visible:outline-none border border-accent focus-visible:ring-1 focus-visible:ring-accent focus:ring-0 focus:outline-none p-5"
              placeholder="Your email"
            />

            <Input
              className="rounded-lg focus-visible:outline-none border border-accent focus-visible:ring-1 focus-visible:ring-accent focus:ring-0 focus:outline-none p-5"
              placeholder="Your subject"
            />

            <Textarea
              placeholder="Message"
              className="rounded-lg focus-visible:outline-none border border-accent focus-visible:ring-1 focus-visible:ring-accent focus:ring-0 focus:outline-none xl:h-[300px] h-full"
            />

            <Button
              type="submit"
              className="w-full border p-5 hover:bg-hover border-accent rounded-lg bg-accent text-black"
            >
              Send
            </Button>
          </div>
        </div>
      </div>
    </form>
  )
}
