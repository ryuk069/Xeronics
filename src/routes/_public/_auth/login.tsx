import { createFileRoute } from '@tanstack/react-router'
import { PublicRoute } from '#/modules/auth/ui/PublicRoute'
import { SignInPage } from '#/modules/auth/ui/SignInPage'

export const Route = createFileRoute('/_public/_auth/login')({
  component: LoginRoute,
})

function LoginRoute() {
  return (
    <PublicRoute>
      <SignInPage />
    </PublicRoute>
  )
}
