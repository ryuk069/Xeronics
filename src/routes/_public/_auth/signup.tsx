import { createFileRoute } from '@tanstack/react-router'
import { PublicRoute } from '#/modules/auth/ui/PublicRoute'
import { SignUpPage } from '#/modules/auth/ui/SignUpPage'

export const Route = createFileRoute('/_public/_auth/signup')({
  component: LoginRoute,
})

function LoginRoute() {
  return (
    <PublicRoute>
      <SignUpPage />
    </PublicRoute>
  )
}
