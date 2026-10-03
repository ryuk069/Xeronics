// components/layout/shop/nav-data.ts
export const categories = [
  { label: 'Charging & Power', to: '/products' },
  { label: 'Audio', to: '/products' },
  { label: 'Cases & Protection', to: '/products' },
  { label: 'Cables', to: '/products' },
  { label: 'Storage', to: '/products' },
] as const

export const accountLinks = [
  { label: 'Account', to: '/user/profile' },
  { label: 'Orders', to: '/user/orders' },
  { label: 'Shipping Addresses', to: '/user/addresses' },
  { label: 'Wishlist', to: '/wishlist' },
  { label: 'Sessions', to: '/user/sessions' },
  { label: 'Change Password', to: '/user/change-password' },
] as const
