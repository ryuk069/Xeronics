import type { CatalogManifest } from "../types/catelog"

// export async function getCatalog() {
//   const response = await fetch(
//     cdn('catalog/catalog-manifest-v1.json'),
//   )

//   if (!response.ok) {
//     throw new Error('Failed to load catalog')
//   }

//   return response.json() as Promise<CatalogManifest>
// }

export async function getCatalog(): Promise<CatalogManifest> {
  const response = await fetch('/catalog/catalog-manifest-v1.json')

  if (!response.ok) {
    throw new Error('Failed to load catalog')
  }

  return response.json()
}
