import { ProductListing } from '#/modules/product/ui/ProductListing'
import { createFileRoute } from '@tanstack/react-router'
import { zodValidator, fallback } from '@tanstack/zod-adapter'
import z from 'zod'

const searchSchema = z.object({
  cat: z.string(),
  subcat: z.string().optional(),
  minPrice: z.number().optional(),
  maxPrice: z.number().optional(),
  brand: z.array(z.string()).optional(),
  color: z.array(z.string()).optional(),
  rating: z.number().optional(),
  attrs: z.record(z.string(), z.array(z.string())).optional(),
  sort: fallback(
    z.enum(['newest', 'price-asc', 'price-desc']),
    'newest',
  ).optional(),
  page: fallback(z.number(), 1).default(1),
})

export const Route = createFileRoute('/_public/products/')({
  validateSearch: zodValidator(searchSchema),
  component: ProductListing,
})
