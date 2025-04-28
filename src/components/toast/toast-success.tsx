import { CheckCheck } from 'lucide-react'
import { toast } from 'sonner'

export function showSuccessToast() {
  toast.success('Email sent successfully', {
    icon: <CheckCheck className="text-accent" />,
    description: 'Thank you for contacting me. I will get back to you shortly!',
    duration: 4000,
  })
}
