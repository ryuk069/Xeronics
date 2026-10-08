import { useState } from 'react'
import type { FormMessage } from '../types/form'
import { Eye, EyeClosed } from 'lucide-react'
import { signUp } from '../api/auth'
import FormCard from '#/shared/ui/Form/FormCard'
import { FormInput } from '#/shared/ui/Form/FormInput'
import { Link, useNavigate } from '@tanstack/react-router'
import { ApiError } from '#/shared/api/client'

export function SignUpPage() {
  const [message, setMessage] = useState<FormMessage | null>(null)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (event: React.SubmitEvent) => {
    event.preventDefault()
    setMessage(null)
    if (password !== confirmPassword) {
      setMessage({ type: 'error', text: 'Passwords does not match.' })
      return
    }
    try {
      const res = await signUp({
        email,
        username,
        password,
      })
      setMessage({
        type: 'success',
        text:
          res.message ?? 'Your account has been created. You can now sign in.',
      })
      setTimeout(() => {
        navigate({ to: '/login', replace: true })
      }, 2000)
    } catch (error) {
      if (error instanceof ApiError) {
        setMessage({
          type: 'error',
          text:
            error instanceof Error
              ? error.message
              : 'Unable to create your account. Please try again.',
        })
      }
    }
  }

  return (
    <FormCard message={message} title={'Sign Up'}>
      <form onSubmit={handleSubmit} className="auth-card-form ">
        <FormInput
          id="username"
          label="username"
          type='text'
          name="username"
          autoComplete="username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></FormInput>
        <FormInput
          id="email"
          label="Email"
          name="email"
          type='email'
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></FormInput>
        <div className="password-field">
          <FormInput
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            required
            autoComplete="new-password"
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
        <FormInput
          id="confirmPassword"
          name="confirmPassword"
          type='password'
          required
          autoComplete="new-password"
          label="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
        <div className="flex justify-center">
          <p className="text-center text-(--text-secondary)">
            Already have an account?&nbsp;
          </p>
          <Link to="/login" className="text-(--accent) hover:underline">
            SignIn
          </Link>
        </div>
      </form>
    </FormCard>
  )
}
