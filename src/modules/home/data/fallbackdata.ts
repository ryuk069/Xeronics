import type { Product } from '#/shared/types/product'

const fallbackProducts: Array<Product> = [
  {
    _id: 1,
    name: 'Xeronics Flex USB-C Cable',
    feature: 'Braided USB-C cable with fast charging and data transfer',
    image: '/fallback/flex-cable.jpg',
    price: 799,
    tag: 'New',
  },
  {
    _id: 2,
    name: 'Xeronics MagCharge Wireless Pad',
    feature: 'Magnetic wireless charging pad with fast charging support',
    image: '/fallback/magcharge.jpg',
    price: 1799,
    tag: 'New',
  },
  {
    _id: 3,
    name: 'Xeronics Precision Wireless Mouse',
    feature: 'Ergonomic wireless mouse with adjustable DPI and silent clicks',
    image: '/fallback/wireless-mouse.jpg',
    price: 2199,
  },
  {
    _id: 4,
    name: 'Xeronics 65W GaN Charger',
    feature: 'Compact 65W charger for phones, tablets and laptops',
    image: '/fallback/gan-65w.jpg',
    price: 2999,
    originalPrice: 3499, // shows the automatic -14% badge; remove if you don't want a sale item
  },
]

export const fallbackNewArrivals: Array<Product> = fallbackProducts
export const fallbackBestSeller: Array<Product> = [...fallbackProducts].reverse()
