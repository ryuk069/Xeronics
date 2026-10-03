import Features from './Features'
import HeroSlider from './HeroSlider'
import { NewArrival } from './NewArrival'

export const HomePage = () => {

  return (
    <>
      <HeroSlider></HeroSlider>
      <NewArrival></NewArrival>
      <Features></Features>
    </>
  )
}

function CountdownBox({ value, label }: any) {
  return (
    <div className="flex h-20 w-20 flex-col items-center justify-center rounded-lg border border-zinc-800 bg-[#101719] sm:h-22 sm:w-22">
      <span className="font-mono text-2xl font-semibold text-(--accent)">
        {value}
      </span>

      <span className="mt-1 text-[10px] tracking-widest text-zinc-500">
        {label}
      </span>
    </div>
  )
}

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


//TODO
//add rating of the each product
const bestSellers = [
  {
    id: 1,
    imageUrl: '/case.png',
    name: 'Clear Case — iPhone 15',
    feature: 'Clear · Shockproof',
    tag: 'New',
    price: 18.99,
  },
  {
    id: 2,
    imageUrl: '/airpod.jpg',
    name: 'Smartwatch Sport Band',
    feature: 'Silicone · 5 colors',
    tag: 'New',
    price: 14.99,
  },
  {
    id: 3,
    imageUrl: '/lens.jpg',
    name: 'Compact USB-C Hub',
    feature: '7-in-1 · USB-C',
    tag: 'New',
    price: 29.99,
  },
  {
    id: 4,
    imageUrl: '/screen.png',
    name: 'Wireless Charging Stand',
    feature: '15W · Qi2',
    tag: '-10%',
    price: 26.99,
    originalPrice: 29.99,
  },
]
