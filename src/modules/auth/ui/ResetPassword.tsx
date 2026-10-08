import { Eye, EyeClosed } from 'lucide-react'
import type { FormMessage } from '../types/form'
import { useState } from 'react'
import { Navigate, useNavigate } from '@tanstack/react-router'
import { resetPassword } from '../api/auth'
import { FormInput } from '#/shared/ui/Form/FormInput'
import FormCard from '#/shared/ui/Form/FormCard'

export const ResetPassword = ({token}: {token: string | undefined}) => {
  const [message, setMessage] = useState<FormMessage | null>(null)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate();

  if (!token) {
    return <Navigate to="/forgot-password" replace />
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (password !== confirmPassword) {
      setMessage({
        type: 'error',
        text: 'Passwords do not match',
      })
      return
    }

    try {
      const res = await resetPassword({
        resetToken: String(token),
        newPassword: password,
      })

      if (Object.hasOwn(res, 'activeSessions')) {
        setMessage({
          type: 'success',
          text: 'Password reset successfully',
        })
        setTimeout(() => {
          navigate({to: '/login'})
        }, 2000)
        return
      }
      setMessage({
        type: 'error',
        text: res.message ?? 'something went wrong',
      })
    } catch (error) {
      setMessage({
        type: 'error',
        text: `${error}`,
      })
    }
  }

  return (
    <FormCard message={message} title="Reset Password">
      <form onSubmit={handleSubmit} className="auth-card-form">
        <div className="password-field">
          <FormInput
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            required
            autoComplete="new-password"
            label="New Password"
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
          id="confirm-password"
          name="confirm-password"
          type="password"
          required
          autoComplete="new-password"
          label="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button type="submit">Reset Password</button>
      </form>
    </FormCard>
  )
}
