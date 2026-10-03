import { useEffect, useState } from 'react'
import { cdn } from '#/shared/libs/cdn/cdn'

const slides = [
  { src: cdn('banners/headphone1-v1.webp'), alt: 'Wireless headphones' },
  { src: cdn('banners/headphone2-v1.webp'), alt: 'Over-ear headphones' },
  { src: cdn('banners/airpod1-1.webp'), alt: 'Wireless earbuds' },
]

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || slides.length < 2) return

    const timeout = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3000)

    return () => clearTimeout(timeout)
  }, [currentSlide, paused])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const previousSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section
      className="image-sliders relative z-20 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Featured products"
    >
      <div
        className="flex h-[50vh] transition-transform duration-700 ease-in-out will-change-transform"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.src} className="h-full w-full shrink-0">
            <img
              src={slide.src}
              alt={slide.alt}
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              decoding="async"
              fetchPriority='high'
              className="h-full w-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous slide"
            className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-black/40 px-3 py-2 text-white hover:bg-black/60"
          >
            ←
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-black/40 px-3 py-2 text-white hover:bg-black/60"
          >
            →
          </button>

          <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  currentSlide === index ? 'scale-125 bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  )
}

export default HeroSlider
