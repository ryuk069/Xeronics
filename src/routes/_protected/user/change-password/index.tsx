import { ProtectedRoute } from '#/modules/auth/ui/ProtectedRoute'
import { ChangePasswordPage } from '#/modules/user/ui/ChangePassword'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/user/change-password/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (<ProtectedRoute>
      <ChangePasswordPage></ChangePasswordPage>
  </ProtectedRoute>)
}
