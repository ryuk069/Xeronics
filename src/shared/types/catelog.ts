export interface CatalogFilter {
  key: string
  label: string
  type: string
  options?: string[]
  min?: number
  max?: number
  unit?: string
}

export interface CatalogSubcategory {
  slug: string
  label: string
  filters: CatalogFilter[]
}

export interface CatalogCategory {
  slug: string
  label: string
  subcategories: CatalogSubcategory[]
}

export interface CatalogManifest {
  version: number
  categories: CatalogCategory[]
}
