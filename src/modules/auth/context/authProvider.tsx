import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { logout as logoutRequest, refreshToken } from '../api/auth'
import type { AuthResponse, User } from '../types/contextTypes'
import { AuthContext } from './authContext'
import { getCurrentUser } from '#/modules/user/api/user'

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const [isInitializing, setIsInitializing] = useState(true)

  useEffect(() => {
    let active = true

    async function initialize() {
      try {
        const { token } = await refreshToken()
        const { user: currentUser } = await getCurrentUser(token)
        if (active) {
          setAccessToken(token)
          setUser(currentUser)
        }
      } catch {
        // No valid HttpOnly refresh cookie means the user starts signed out.
      } finally {
        if (active) setIsInitializing(false)
      }
    }

    void initialize()
    return () => {
      active = false
    }
  }, [])

  const signIn = useCallback((response: AuthResponse) => {
    setAccessToken(response.token);
    setUser(response.user);
  }, [])

  const signOut = useCallback(async () => {
    try {
      if (accessToken) await logoutRequest(accessToken)
    } finally {
      setAccessToken(null)
      setUser(null)
    }
  }, [accessToken])

  const value = useMemo(
    () => ({
      user,
      accessToken,
      isAuthenticated: Boolean(user && accessToken),
      isInitializing,
      signIn,
      signOut,
      setUser,
    }),
    [user, accessToken, isInitializing, signIn, signOut],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
