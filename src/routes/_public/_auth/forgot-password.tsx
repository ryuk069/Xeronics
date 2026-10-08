import { ForgotPasswordPage } from '#/modules/auth/ui/ForgotPassword'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_public/_auth/forgot-password')({
  component: ForgotPasswordPage,
})
