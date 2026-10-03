import { queryOptions } from '@tanstack/react-query'
import type { Product } from '#/shared/types/product'
import { api } from '#/shared/api/client'

export const newArrivalsQuery = queryOptions({
  queryKey: ['home', 'new-arrivals'],
  queryFn: async () => {
    const res = await api<{ products: Array<Product> }>(
      '/api/v1/products?sort=newest&limit=4',
    )
    return res.products
  },
  staleTime: 5 * 60 * 1000,
})

export const bestSellersQuery = queryOptions({
  queryKey: ['home', 'best-sellers'],
  queryFn: async () => {
    const res = await api<{ products: Array<Product> }>('/api/v1/products?sort=best-selling&limit=4')
    return res.products
  },
  staleTime: 5 * 60 * 1000,
})
