import { useQuery } from '@tanstack/react-query'
import { getCatalog } from '../api/catelog'

export function useCatalog() {
  return useQuery({
    queryKey: ['catalog'],
    queryFn: getCatalog,

    staleTime: Infinity,
    gcTime: Infinity,
  })
}
