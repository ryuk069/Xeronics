import { ResetPassword } from '#/modules/auth/ui/ResetPassword'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_public/_auth/reset-password')({
  validateSearch: (search: Record<string, unknown>) => ({
    token: typeof search.token === 'string' ? search.token : undefined,
  }),
  component: RouteComponent,
})

function RouteComponent() {
  const { token } = Route.useSearch()
  return (
    <>
    <ResetPassword token={token}></ResetPassword>
  </>
  )
}
