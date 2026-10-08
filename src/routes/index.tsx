import { createFileRoute } from '@tanstack/react-router'
import { HomePage } from '#/modules/home/ui/HomePage'
import { bestSellersQuery, newArrivalsQuery } from '#/modules/home/api/home'

export const Route = createFileRoute('/')({
  loader: ({ context }) => {
    void context.queryClient.prefetchQuery(newArrivalsQuery);
    void context.queryClient.prefetchQuery(bestSellersQuery);
  },
  component: HomePage,
})
