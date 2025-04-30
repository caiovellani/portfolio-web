import { Toaster } from 'sonner'

export function ToasterProvider() {
  return (
    <Toaster
      position="bottom-right"
      richColors
      closeButton
      duration={4000}
      expand
      theme="system"
      visibleToasts={3}
      toastOptions={{
        classNames: {
          toast: 'rounded-2xl shadow-lg font-medium',
          description: 'text-sm text-zinc-300',
        },
      }}
    />
  )
}
