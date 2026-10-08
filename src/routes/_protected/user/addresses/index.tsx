import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/user/addresses/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/user/addresses/"!</div>
}
