import { useSearch } from '@tanstack/react-router'
import { ProductFilters } from './ProductFilters'
import ProductGrid from './ProductGrid'

const SUB_CATEGORIES = [
  { slug: 'charging-power', label: 'Charging & Power' },
  { slug: 'audio', label: 'Audio' },
  { slug: 'cases-protection', label: 'Cases & Protection' },
  { slug: 'cables', label: 'Cables' },
  { slug: 'storage', label: 'Storage' },
]

export function ProductListing() {
  const search = useSearch({ from: '/_public/products/' })

  const category = SUB_CATEGORIES.find(
    (category) => category.slug === search.subcat,
  )

  return (
    <div className="max-w-screen px-10">
      <div className="py-5">
        <p className="text-3xl">{category?.label}</p>
        <p className="text-(--text-secondary) text-[14px]">128 Products</p>
      </div>

      <div className="flex w-full">
        <aside className="w-2/10 border-r border-t border-(--border-strong) pr-2">
          <ProductFilters />
        </aside>

        <section className="flex-1">
          <ProductGrid />
        </section>
      </div>
    </div>
  )
}
