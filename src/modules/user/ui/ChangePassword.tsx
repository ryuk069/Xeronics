import { useAuth } from '#/modules/auth/hooks/useAuth'
import type { FormMessage } from '#/modules/auth/types/form'
import { useState } from 'react'
import { changePassword } from '../api/user'
import { FormInput } from '#/shared/ui/Form/FormInput'
import FormCard from '#/shared/ui/Form/FormCard'


export const ChangePasswordPage = () => {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState<FormMessage | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { accessToken } = useAuth()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (newPassword.length < 8) {
      setMessage({
        type: 'error',
        text: 'New password must be at least 8 characters',
      })
      return
    }

    if (newPassword !== confirmPassword) {
      setMessage({
        type: 'error',
        text: 'Passwords do not match',
      })
      return
    }

    try {
      setIsSubmitting(true)
      setMessage(null)

      const res = await changePassword(
        {
          currentPassword,
          newPassword,
        },
        accessToken,
      )

      setMessage({
        type: 'success',
        text: res.message ?? 'Password changed successfully',
      })

      setCurrentPassword('')
      setNewPassword('')
      setConfirmPassword('')

      // Don't navigate immediately yet.
      // We'll decide how to handle the current session
      // after considering your session-revocation behavior.
    } catch (error) {
      setMessage({
        type: 'error',
        text: error instanceof Error ? error.message : 'Something went wrong',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <FormCard className="auth-card" message={message}>

      <form onSubmit={handleSubmit} className="auth-card-form">
        <h1 className="text-center">Change Password</h1>

        <FormInput
          id="current-password"
          name="current-password"
          type="password"
          required
          autoComplete="current-password"
          label="Current Password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />

        <FormInput
          id="new-password"
          name="new-password"
          type="password"
          required
          autoComplete="new-password"
          label="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <FormInput
          id="confirm-password"
          name="confirm-password"
          type="password"
          required
          autoComplete="new-password"
          label="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button
          type="submit"
          disabled={
            isSubmitting || !currentPassword || !newPassword || !confirmPassword
          }
        >
          {isSubmitting ? 'Changing...' : 'Change Password'}
        </button>
      </form>
    </FormCard>
  )
}
