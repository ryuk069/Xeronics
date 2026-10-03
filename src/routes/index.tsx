import { createFileRoute } from '@tanstack/react-router'
import { HomePage } from '#/modules/home/ui/HomePage'
import { newArrivalsQuery } from '#/modules/home/api/home'

export const Route = createFileRoute('/')({
  loader: ({ context }) =>
    context.queryClient.ensureQueryData(newArrivalsQuery),
  component: HomePage,
})
