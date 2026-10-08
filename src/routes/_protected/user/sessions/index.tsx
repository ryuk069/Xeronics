import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/user/sessions/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/user/sessions/"!</div>
}
