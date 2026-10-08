import { Navigate, useNavigate } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import type { FormMessage } from '../types/form'
import { sendVerificationLink, verifyVerificationLink } from '../api/auth'
import FormCard from '#/shared/ui/Form/FormCard'

export const VerifyEmail = ({
  email,
  token,
}: {
  email?: string
  token?: string
}) => {
  if (token) {
    return <EmailVerificationOngoing token={token} />
  }
  if (!email) {
    return <Navigate to="/login" replace />
  }

  return <SendVerificationEmail email={email} />
}

const SendVerificationEmail = ({ email }: { email: string }) => {
  const [sending, setSending] = useState(false)
  const [countdown, setCountdown] = useState(0)
  const [hasSentVerification, setHasSentVerification] = useState(false)
  const [message, setMessage] = useState<FormMessage | null>(null)

  useEffect(() => {
    if (countdown <= 0) return

    const id = setInterval(() => {
      setCountdown((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(id)
  }, [countdown])

  async function handleSendVerification() {
    if (sending || countdown > 0) return

    try {
      setSending(true)

      setHasSentVerification(true)
      setCountdown(60)
      setMessage({
        type: 'success',
        text: 'Check your mail inbox for verification link',
      })
      await sendVerificationLink({ email })
    } catch (error: any) {
      setMessage({ type: 'error', text: `${error.message}` })
    } finally {
      setSending(false);
    }
  }

  return (
    <FormCard message={message} title="Email Verification">
      <p className="text-center">
        We need you to verify <strong>{email}</strong> before continuing.
      </p>
      <div className="auth-card-form">
        <button
          onClick={handleSendVerification}
          disabled={sending || countdown > 0 || hasSentVerification}
        >
          Send Verification Email
        </button>
        <button
          onClick={handleSendVerification}
          disabled={sending || !hasSentVerification || countdown > 0}
        >
          {countdown > 0
            ? `Resend in ${countdown}s`
            : 'Resend Verification Email'}
        </button>
      </div>
    </FormCard>
  )
}

const EmailVerificationOngoing = ({ token }: { token: string }) => {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>(
    'loading',
  )

  const navigate = useNavigate()

  useEffect(() => {
    async function verify() {
      try {
        await verifyVerificationLink(token)

        setTimeout(() => {
          setStatus('success')
          navigate({ to: '/login', replace: true })
        }, 3000)
      } catch (error) {
        setStatus('error')
      }
    }

    verify()
  }, [token])

  if (status === 'loading') {
    return (
      <FormCard title='Verifying your email...'>
      </FormCard>
    )
  }

  if (status === 'success') {
    return (
      <>
        <FormCard className="whitespace-normal" title='Email Verified Successfully'>
          <h2 className='text-center text-lg'>You can login now.</h2>
        </FormCard>
      </>
    )
  }

  return (
    <FormCard title='Verification Failed' className="whitespace-normal items-center">
      <p>The verification link is already used or has expired.</p>
    </FormCard >
  )
}
