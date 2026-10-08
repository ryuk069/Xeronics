import { useAuth } from '#/modules/auth/hooks/useAuth'
import CartPage from '#/modules/cart/ui/CartPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/cart')({
  component: CartRoute,
})

function CartRoute() {
  const { isAuthenticated, isInitializing } = useAuth()

  if (isInitializing) {
    return <div>Checking your session...</div>
  }

  if (!isAuthenticated) {
    return <PublicCartRoute />
  }

  return <CartPage />
}

function PublicCartRoute() {
  return (
    <div>
      <h1>Please log in to use your cart</h1>
    </div>
  )
}
