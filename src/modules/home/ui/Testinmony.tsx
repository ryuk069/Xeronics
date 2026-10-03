
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
