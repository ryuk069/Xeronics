// nav-data.ts
export const categories = [
  { label: 'Charging & Power', subcat: 'charging-power' },
  { label: 'Audio', subcat: 'audio' },
  { label: 'Cases & Protection', subcat: 'cases-protection' },
  { label: 'Cables', subcat: 'cables' },
  { label: 'Storage', subcat: 'storage' },
] as const

export const accountLinks = [
  { label: 'Account', to: '/user/profile' },
  { label: 'Orders', to: '/user/orders' },
  { label: 'Shipping Addresses', to: '/user/addresses' },
  { label: 'Wishlist', to: '/wishlist' },
  { label: 'Sessions', to: '/user/sessions' },
  { label: 'Change Password', to: '/user/change-password' },
] as const
