import type { CatalogCategory } from "../types/catelog"

export function getCategory(
  categories: CatalogCategory[],
  slug: string,
) {
  return categories.find((c) => c.slug === slug)
}

export function getSubcategories(
  categories: CatalogCategory[],
  slug: string,
) {
  return getCategory(categories, slug)?.subcategories ?? []
}
