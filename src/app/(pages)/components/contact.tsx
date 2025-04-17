import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function Contact() {
  return (
    <section id="hero" className="h-full relative overflow-hidden px-4 flex">
      <div className="absolute inset-0 z-0 bg-grid pointer-events-none" />

      <div className="container h-full pt-8 flex flex-col items-center justify-center mx-auto gap-6">
        <div className="">
          <h1 className="text-[48px] xl:text-[80px] leading-[1.1] font-semibold text-center">
            Contato
          </h1>
          <p className="text-center text-white/80">
            Feel free to reach out if you have any questions or if there's an
            opportunity where I can add value!
          </p>
        </div>

        <div className="w-[388px] bg-[#18181B] rounded-2xl px-4 pt-6 gap-4 flex flex-col">
          <Input
            className="rounded-lg border px-4 border-accent"
            placeholder="Your name"
          />

          <Input
            className="rounded-lg border px-4 border-accent"
            placeholder="Your email"
          />

          <Input
            className="rounded-lg border px-4 border-accent"
            placeholder="Your subject"
          />

          <Textarea
            placeholder="Message"
            className="rounded-lg border border-accent px-4"
          />

          <Button className="w-full border border-accent rounded-lg bg-accent text-black">
            Send
          </Button>
        </div>
      </div>
    </section>
  )
}
