import type { Product } from "#/shared/types/product"
import { ProductCard } from "./ProductCard"

const gridClasses = 'grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'

export const ProductGrid = ({ products }: { products: Array<Product> }) => (
  <div className={gridClasses}>
    {products.map((product) => (
      <ProductCard key={product._id} product={product} />
    ))}
  </div>
)

export const ProductGridSkeleton = ({ count = 4 }: { count?: number }) => (
  <div className={gridClasses} aria-hidden="true">
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} className="animate-pulse">
        <div className="aspect-square bg-(--border-strong)" />
        <div className="mt-3 h-4 w-3/4 bg-(--border-strong)" />
        <div className="mt-2 h-4 w-1/3 bg-(--border-strong)" />
      </div>
    ))}
  </div>
)
