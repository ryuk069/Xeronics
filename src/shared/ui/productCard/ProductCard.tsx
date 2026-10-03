import type { Product } from '#/shared/types/product'

const formatPrice = (value: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
    value,
  )

export const ProductCard = ({ product }: { product: Product }) => {
  const { name, feature, image, price, originalPrice, tag } = product

  const discount =
    originalPrice && originalPrice > price
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : null

  // Explicit tag wins; otherwise show an automatic discount badge
  const badge = tag ?? (discount ? `-${discount}%` : null)
  const isSale = !tag && discount !== null

  return (
    <article className="overflow-hidden rounded-lg border border-(--border-strong)">
      <div className="relative h-60 bg-(--surface-secondary)">
        {badge && (
          <span
            className={`absolute top-2.5 left-2.5 rounded px-2 py-1 text-xs font-medium ${
              isSale
                ? 'bg-orange-500/10 text-orange-400'
                : 'bg-(--accent)/10 text-(--accent)'
            }`}
          >
            {badge}
          </span>
        )}

        <img
          src={image}
          alt={name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="bg-(--surface) p-3.5">
        <p className="mb-1 text-xs text-(--text-secondary)">{tag}</p>
        <h3 className="font-medium">{name}</h3>

        <div className="mt-2 flex items-center gap-2">
          <span className="font-semibold">{formatPrice(price)}</span>
          {originalPrice && (
            <span className="text-sm text-(--text-secondary) line-through">
              {formatPrice(originalPrice)}
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
