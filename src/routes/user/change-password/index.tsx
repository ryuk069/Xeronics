import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/user/change-password/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/user/change-password/"!</div>
}
