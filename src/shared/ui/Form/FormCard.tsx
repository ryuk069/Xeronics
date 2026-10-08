import type { FormMessage } from '#/modules/auth/types/form'
import type { ReactNode } from 'react'

interface FormCardProps {
  message?: FormMessage | null
  children?: ReactNode
  title?: string
  className?: string
}

const FormCard = ({
  message,
  children,
  title = '',
  className = '',
}: FormCardProps) => {
  return (
    <div
      className={`w-full max-w-120 mx-auto my-20 p-10 flex flex-col gap-5 border border-(--border-strong) rounded-[1.25rem] [background:var(--bg-canvas)] ${className}`}
    >
      {message && (
        <p className="form-message" data-type={message.type} role="alert">
          {message.text}
        </p>
      )}
      {title && (
        <h1 className="text-[2rem] leading-[1.2] font-bold text-center text-(--text-primary)">
          {title}
        </h1>
      )}
      {children}
    </div>
  )
}

export default FormCard
