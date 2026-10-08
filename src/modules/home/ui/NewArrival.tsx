import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import {
  useQueryErrorResetBoundary,
  useSuspenseQuery,
} from '@tanstack/react-query'
import {
  ProductGrid,
  ProductGridSkeleton,
} from '#/shared/ui/productCard/ProductGrid'
import { newArrivalsQuery } from '#/modules/home/api/home'
import { fallbackNewArrivals } from '../data/fallbackdata'

export const NewArrival = () => {
  const { reset } = useQueryErrorResetBoundary()

  return (
    <section className="new-arrivals border border-(--border-strong)">
      <div className="px-7.5 py-12">
        <div className="mb-7">
          <div className="flex items-center gap-2">
            <hr className="w-[1vw] border-0 border-t border-(--accent)" />
            <span className="text-sm font-medium tracking-widest text-(--accent)">
              JUST LANDED
            </span>
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            New arrivals
          </h2>
        </div>

        <ErrorBoundary
          onReset={reset}
          fallbackRender={() => (
            <ProductGrid products={fallbackNewArrivals} />
          )}
        >
          <Suspense fallback={<ProductGridSkeleton count={4} />}>
            <NewArrivalsGrid />
          </Suspense>
        </ErrorBoundary>
      </div>
    </section>
  )
}

const NewArrivalsGrid = () => {
  const { data } = useSuspenseQuery(newArrivalsQuery)
  return <ProductGrid products={data} />
}
