import { useState } from 'react'
import type { FormMessage } from '../types/form'
import { Eye, EyeClosed } from 'lucide-react'
import { login } from '../api/auth'
import FormCard from '#/shared/ui/Form/FormCard'
import { useAuth } from '../hooks/useAuth'
import { FormInput } from '#/shared/ui/Form/FormInput'
import { Link, useNavigate } from '@tanstack/react-router'
import { ApiError } from '#/shared/api/client'

export function SignInPage() {
  const [message, setMessage] = useState<FormMessage | null>(null)
  const { signIn } = useAuth()
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate();

  const handleSubmit = async (event: React.SubmitEvent) => {
    event.preventDefault()
    setMessage(null)
    setRememberMe(false)

    try {
      const res = await login({
        identifier,
        password,
        rememberMe,
      })

      setMessage({ type: 'success', text: 'Logged in successfully.' })
      setTimeout(() => {
        signIn(res);
      }, 3000);
    } catch (error) {
      if (error instanceof ApiError) {
        if (error.data.requireEmailVerification) {
          setMessage({
            type: 'error',
            text:
              error instanceof Error
                ? error.message
                : 'Unable to sign in. Please try again.',
          })
          setTimeout(() => {
            navigate({
              to: '/verify-email',
              search: { token: undefined },
              state: {
                email: error.data.email,
              }
            })
          }, 2000)

          return
        }
      }

      setMessage({
        type: 'error',
        text:
          error instanceof Error
            ? error.message
            : 'Unable to sign in. Please try again.',
      })
    }
  }


  return (
    <FormCard message={message} title={'Sign In'}>
      <form onSubmit={handleSubmit} className="auth-card-form ">
        <FormInput
          id="identifier"
          label="Email or Username"
          name="identifier"
          autoComplete="username"
          required
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
        ></FormInput>
        <div className="password-field">
          <FormInput
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            required
            autoComplete="current-password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div
            onClick={() => setShowPassword((prev) => !prev)}
            className="password-toggle"
          >
            {showPassword ? <Eye /> : <EyeClosed />}
          </div>
        </div>
        <Link to="/forgot-password" className="forgot-password-link">
          Forgot password?
        </Link>
        <button type="submit">Sign In</button>
        <div className="flex justify-center">
          <p className="text-center text-(--text-secondary)">Don't have an account?&nbsp;</p>
          <Link to="/signup" className='text-(--accent) hover:underline'>SignUp</Link>
        </div>
      </form>
    </FormCard>
  )
}
