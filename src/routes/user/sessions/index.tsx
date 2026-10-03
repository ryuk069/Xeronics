import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/user/sessions/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/user/sessions/"!</div>
}
