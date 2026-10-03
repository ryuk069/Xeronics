import { ProductCard } from './ProductCard'
import type { Product } from '#/shared/types/product'

export const ProductGrid = ({ products }: { products: Array<Product> }) => (
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
    {products.map((product) => (
      <ProductCard key={product._id} product={product} />
    ))}
  </div>
)
