import { AccountMenu } from './AccountMenu'
import { CartLink } from './CartLink'
import { Logo } from './Logo'
import { NavCategoryLinks } from './NavCategoryLink'
import { PromoBanner } from './PromoBanner'
import { SearchBar } from './SearchBar'
import { WishlistLink } from './WishlistLink'

export function Navbar() {
  return (
    <header className="flex flex-col rounded-t-2xl border border-(--border-strong) whitespace-nowrap">
      <PromoBanner />
      <nav
        aria-label="Primary navigation"
        className="h-[6vh] flex items-center gap-5 px-3 md:gap-15 md:px-5 text-[clamp(1rem,1.5vw,1.25rem)] border border-(--border-strong)"
      >
        <Logo />
        <NavCategoryLinks className="hidden xl:flex gap-5" />
        <SearchBar />
        <div className="flex items-center gap-5">
          <WishlistLink />
          <CartLink />
          <AccountMenu />
        </div>
      </nav>
      <NavCategoryLinks className="flex xl:hidden w-full justify-center gap-5 text-[9px] md:text-sm lg:text-lg" />
    </header>
  )
}
