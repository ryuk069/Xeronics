import { useEffect, useRef, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { CircleUser } from 'lucide-react'
import { accountLinks } from './nav-data'

export function AccountMenu() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // const { user, isAuthenticated, isInitializing, signOut } = useAuth()
  const isInitializing = false
  const isAuthenticated = false

  useEffect(() => {
    if (!open) return
    const onMouseDown = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onMouseDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const close = () => setOpen(false)

  const handleLogout = async () => {
    // await signOut()
    // navigate({ to: '/login', replace: true })
    close()
  }

  return (
    <div ref={ref} className="relative flex">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Account menu"
        onClick={() => setOpen((prev) => !prev)}
      >
        <CircleUser />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full z-50 w-64 rounded-lg border border-(--border-strong) [background:var(--bg-canvas)] p-4 shadow-lg"
        >
          {isInitializing ? (
            <p className="text-sm text-(--text-secondary)">
              Checking account...
            </p>
          ) : isAuthenticated ? (
            <UserMenu onNavigate={close} onLogout={handleLogout} />
          ) : (
            <GuestMenu onNavigate={close} />
          )}
        </div>
      )}
    </div>
  )
}

function UserMenu({
  onNavigate,
  onLogout,
}: {
  onNavigate: () => void
  onLogout: () => void
}) {
  return (
    <>
      <div className="mb-4 flex items-center gap-1 border-b border-(--border-strong) pb-3">
        <p className="text-(--text-secondary)">Hello,</p>
        {/* <p>{user?.username}</p> */}
      </div>

      <div className="flex flex-col gap-1">
        {accountLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            onClick={onNavigate}
            className="rounded-md px-3 py-2"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="mt-3 border-t border-(--border-strong) pt-3">
        <button
          type="button"
          onClick={onLogout}
          className="w-full rounded-md px-3 py-2 text-left text-red-600 hover:bg-red-50"
        >
          Logout
        </button>
      </div>
    </>
  )
}

function GuestMenu({ onNavigate }: { onNavigate: () => void }) {
  return (
    <>
      <div className="mb-4">
        <p className="font-medium">Welcome</p>
        <p className="text-sm text-(--text-secondary)">
          Sign in to access your account.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <Link
          to="/login"
          onClick={onNavigate}
          className="rounded-md border px-3 py-2 text-center text-sm font-medium"
        >
          Login
        </Link>
        {/* <Link to="/signup" ...>Register</Link> */}
      </div>
    </>
  )
}
