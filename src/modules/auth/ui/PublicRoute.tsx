import type { ReactNode } from 'react'
import { Navigate } from '@tanstack/react-router'
import { useAuth } from '../hooks/useAuth'

type PublicRouteProps = {
  children: ReactNode
}

export function PublicRoute({ children }: PublicRouteProps) {
  const { isAuthenticated, isInitializing } = useAuth()

  if (isInitializing) {
    return <div>Checking account...</div>
  }

  if (isAuthenticated) {
    return <Navigate to="/" replace />
  }

  return children
}
