import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function Contact() {
  return (
    <section id="contact" className="h-full relative overflow-hidden px-4 flex">
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

        <div className="w-[450px] xl:w-[500px] xl:h-[400px] bg-[#18181B] rounded-2xl p-3 gap-2 xl:gap-3 flex flex-col">
          <Input
            className="rounded-lg focus-visible:outline-none border border-accent focus-visible:ring-1 focus-visible:ring-accent focus:ring-0 focus:outline-none xl:p-5"
            placeholder="Your name"
          />

          <Input
            className="rounded-lg focus-visible:outline-none border border-accent focus-visible:ring-1 focus-visible:ring-accent focus:ring-0 focus:outline-none xl:p-5"
            placeholder="Your email"
          />

          <Input
            className="rounded-lg focus-visible:outline-none border border-accent focus-visible:ring-1 focus-visible:ring-accent focus:ring-0 focus:outline-none xl:p-5"
            placeholder="Your subject"
          />

          <Textarea
            placeholder="Message"
            className="rounded-lg focus-visible:outline-none border border-accent focus-visible:ring-1 focus-visible:ring-accent focus:ring-0 focus:outline-none xl:h-[300px]"
          />

          <Button
            type="submit"
            className="w-full border hover:bg-hover border-accent rounded-lg bg-accent text-black"
          >
            Send
          </Button>
        </div>
      </div>
    </section>
  )
}
