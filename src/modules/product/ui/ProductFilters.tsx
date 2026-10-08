import { useNavigate, useSearch } from '@tanstack/react-router'
import { FilterSection } from './FilterSection'
import { useCatalog } from '#/shared/hooks/useCatelog'

export function ProductFilters() {
  const search = useSearch({ from: '/_public/products/' })
  const navigate = useNavigate({ from: '/products/' })
  const { data: catalog } = useCatalog()

  const categories = catalog?.categories ?? []

  const selectedCategory = categories.find(
    (category) => category.slug === search.cat,
  )

  const subcategories = selectedCategory?.subcategories ?? []

  const update = (patch: Partial<typeof search>) =>
    navigate({
      search: (prev) => ({
        ...prev,
        ...patch,
        page: 1,
      }),
    })

  return (
    <div className="flex flex-col">
      <FilterSection title="Category" defaultOpen={false}>
        {categories.map((category) => {
          const checked = search.cat === category.slug

          return (
            <label key={category.slug} className="flex items-center gap-2 py-1">
              <input
                type="radio"
                name="category"
                checked={checked}
                onChange={() =>
                  update({
                    cat: category.slug,
                    subcat: 'default',
                  })
                }
              />

              {category.label}
            </label>
          )
        })}
      </FilterSection>

      <FilterSection title="Sub-Category" defaultOpen={false}>
        {subcategories.map((subcategory) => {
          const checked = search.subcat === subcategory.slug

          return (
            <label
              key={subcategory.slug}
              className="flex items-center gap-2 py-1"
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() =>
                  update({
                    subcat: checked ? 'default' : subcategory.slug,
                  })
                }
              />

              {subcategory.label}
            </label>
          )
        })}
      </FilterSection>

      <button
        onClick={() =>
          update({
            
          })
        }
        className="w-full border text-center"
      >
        Clear filter
      </button>
    </div>
  )
}
