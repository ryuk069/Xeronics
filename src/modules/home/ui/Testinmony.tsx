const Testinmony = () => {
  return (
    <section className="testimony px-4 py-12 sm:px-6 lg:px-10 lg:py-16 whitespace-normal border border-(--border-strong)">
      <div className="mx-auto grid max-w-8xl grid-cols-1 gap-5 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} {...testimonial} />
        ))}
      </div>
    </section>
  )
}

export default Testinmony

function TestimonialCard({ rating, text, name }: any) {
  return (
    <article className="flex min-h-67.5 flex-col rounded-2xl border border-zinc-800 bg-[#15181c] p-6 sm:p-8">
      {/* Rating */}
      <div
        className="text-xl tracking-[0.15em] text-(--accent)"
        aria-label={`${rating} out of 5 stars`}
      >
        {'★'.repeat(rating)}
        <span className="text-(--accent)/50">{'★'.repeat(5 - rating)}</span>
      </div>

      {/* Testimonial */}
      <p className="mt-6 text-lg leading-relaxed text-zinc-400">"{text}"</p>

      {/* Author */}
      <div className="mt-auto flex items-center justify-between pt-8">
        <span className="font-semibold text-zinc-100">{name}</span>

        <span className="text-sm text-zinc-600">Verified buyer</span>
      </div>
    </article>
  )
}
const testimonials = [
  {
    rating: 5,
    text: 'Ordered the 100W charger and a couple cables — everything shipped fast and the build quality feels way above the price.',
    name: 'Amara O.',
  },
  {
    rating: 5,
    text: 'The spec sheet on every product page is genuinely useful. Knew exactly what wattage and connector I was getting.',
    name: 'Devon K.',
  },
  {
    rating: 4,
    text: 'Earbuds sound great for the price. Case is a little snug but battery life is exactly as advertised.',
    name: 'Priya S.',
  },
]
