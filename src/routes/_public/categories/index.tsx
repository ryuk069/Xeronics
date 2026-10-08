import Categories from '#/modules/category/ui/Categories'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_public/categories/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Categories></Categories>
}
