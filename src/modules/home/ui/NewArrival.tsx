import { useSuspenseQuery } from '@tanstack/react-query'
import { ProductGrid } from '#/shared/ui/productCard/ProductGrid'
import { newArrivalsQuery } from '#/modules/home/api/home'

export const NewArrival = () => {
  const { data: newArrivals } = useSuspenseQuery(newArrivalsQuery);

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
        <ProductGrid products={newArrivals} />
      </div>
    </section>
  )
}
