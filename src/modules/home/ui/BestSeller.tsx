
const BestSeller = () => {
  return (
    <section className="best-seller border border-(--border-strong)">
      <div className="px-7.5 py-12 overflow-hidden">
        {/* Section heading */}
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

        {/* Products */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {bestSellers.map((product) => (
            <article
              key={product.id}
              className="overflow-hidden rounded-lg border border-(--border-strong)"
            >
              {/* Image */}
              <div className="relative h-60 bg-(--surface-secondary)">
                {/* Tag */}
                {product.tag && (
                  <span
                    className={`absolute left-2.5 top-2.5 rounded px-2 py-1 text-xs font-medium ${
                      product.tag.startsWith('-')
                        ? 'bg-orange-500/10 text-orange-400'
                        : 'bg-(--accent)/10 text-(--accent)'
                    }`}
                  >
                    {product.tag}
                  </span>
                )}

                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Product information */}
              <div className="bg-(--surface) p-3.5">
                <p className="mb-1 text-xs text-(--text-secondary)">
                  {product.feature}
                </p>

                <h3 className="font-medium">{product.name}</h3>

                <div className="mt-2 flex items-center gap-2">
                  <span className="font-semibold">
                    ${product.price.toFixed(2)}
                  </span>

                  {product.originalPrice && (
                    <span className="text-sm text-(--text-secondary) line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BestSeller
