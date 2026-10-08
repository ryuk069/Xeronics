import { VerifyEmail } from '#/modules/auth/ui/VerifyEmail'
import { createFileRoute, useLocation } from '@tanstack/react-router'

export const Route = createFileRoute('/_public/_auth/verify-email')({
  validateSearch: (search: Record<string, unknown>) => ({
    token: typeof search.token === 'string' ? search.token : undefined,
  }),
  component: VerifyEmailRoute,
})

function VerifyEmailRoute() {
  const { token } = Route.useSearch()
  const { email } = useLocation().state
  return <VerifyEmail email={email} token={token} />
}
