import { XCircle } from 'lucide-react'
import { toast } from 'sonner'

export function showErrorToast() {
  toast.error('error sending email', {
    icon: <XCircle className="text-red-500" />,
    description:
      'Please try again or send directly to caiovellani@outlook.com.',
    duration: 4000,
  })
}
