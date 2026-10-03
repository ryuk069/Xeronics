import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/user/addresses/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/user/addresses/"!</div>
}
