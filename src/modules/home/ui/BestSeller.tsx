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
import { bestSellersQuery } from '#/modules/home/api/home'
import { fallbackBestSeller } from '../data/fallbackdata'

export const BestSeller = () => {
  const { reset } = useQueryErrorResetBoundary()

  return (
    <section className="new-arrivals border border-(--border-strong)">
      <div className="px-7.5 py-12">
        <div className="mb-7">
          <div className="flex items-center gap-2">
            <hr className="w-[1vw] border-0 border-t border-(--accent)" />
            <span className="text-sm font-medium tracking-widest text-(--accent)">
              BEST SELLERS
            </span>
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            Most reordered this month
          </h2>
        </div>

        <ErrorBoundary
          onReset={reset}
          fallbackRender={() => (
              <ProductGrid products={fallbackBestSeller}></ProductGrid>
          )}
        >
          <Suspense fallback={<ProductGridSkeleton count={4} />}>
            <BestSellerGrid />
          </Suspense>
        </ErrorBoundary>
      </div>
    </section>
  )
}

const BestSellerGrid = () => {
  const { data } = useSuspenseQuery(bestSellersQuery)
  return <ProductGrid products={data} />
}
