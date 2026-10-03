import { Link } from '@tanstack/react-router'
import { X } from 'lucide-react'

export function Logo() {
  return (
    <>
      <div className="hidden md:flex md:items-center md:gap-2">
        <span className="h-3 w-3 rounded-full bg-(--accent) shadow-[0_0_12px_var(--accent)]" />
        <Link to="/">Xeronics</Link>
      </div>
      <div className="flex md:hidden">
        <Link to="/" aria-label="Xeronics home">
          <X color="var(--accent)" />
        </Link>
      </div>
    </>
  )
}
