// modules/product/types.ts
export type FacetOption = { value: string; label: string; count?: number; hex?: string }

export type ProductFacets = {
  categories: FacetOption[]
  subcategories: FacetOption[]
  brands: FacetOption[]
  colors: FacetOption[]                       // hex used for swatches
  price: { min: number; max: number }
  attributes: { key: string; label: string; options: FacetOption[] }[] // dynamic: wattage, connector...
}
