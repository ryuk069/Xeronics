import { useRef, useState } from 'react'
import type { FormMessage } from '../types/form'
import { useNavigate } from '@tanstack/react-router'
import { sendPasswordResetOtp, verifyPasswordResetOtp } from '../api/auth'
import { FormInput } from '#/shared/ui/Form/FormInput'
import FormCard from '#/shared/ui/Form/FormCard'

export const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [message, setMessage] = useState<FormMessage | null>(null)
  const [mailSent, setMailSent] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [isVerifying, setIsVerifying] = useState(false)

  const navigate = useNavigate()

  const otpRefs = useRef<(HTMLInputElement | null)[]>([])

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  async function handleSendOtp() {
    setMessage(null)

    if (mailSent) {
      setMessage({
        type: 'error',
        text: 'Mail is already sent',
      })
      return
    }

    if (!emailPattern.test(email.trim())) {
      setMessage({
        type: 'error',
        text: 'Invalid email provided',
      })
      return
    }

    if (isSending) {
      return
    }

    try {
      setIsSending(true)

      await sendPasswordResetOtp({
        email: email.trim(),
      })

      setMailSent(true)

      setMessage({
        type: 'success',
        text: 'Check your mail inbox for OTP',
      })

      otpRefs.current[0]?.focus()
    } catch (error) {
      setMessage({
        type: 'error',
        text: `${error}`,
      })
    } finally {
      setIsSending(false)
    }
  }

  function handleOtpChange(index: number, value: string) {
    const digit = value.replace(/\D/g, '').slice(-1)

    setOtp((currentOtp) => {
      const newOtp = [...currentOtp]
      newOtp[index] = digit
      return newOtp
    })

    if (digit && index < otp.length - 1) {
      otpRefs.current[index + 1]?.focus()
    }
  }

  function handleOtpPaste(e: React.ClipboardEvent<HTMLInputElement>) {
    e.preventDefault()

    const pastedText = e.clipboardData.getData('text')
    const digits = pastedText.replace(/\D/g, '')

    if (digits.length !== 6) {
      setMessage({
        type: 'error',
        text: 'Please paste a valid 6-digit OTP',
      })
      return
    }

    setOtp(digits.split(''))

    otpRefs.current[5]?.focus()

    setMessage(null)
  }

  function handleOtpKeyDown(
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus()
    }
  }

  async function handleVerifyOtp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (isVerifying) {
      return
    }

    const code = otp.join('')

    if (code.length !== 6) {
      setMessage({
        type: 'error',
        text: 'OTP must have six digits',
      })
      return
    }

    if (!mailSent) {
      setMessage({
        type: 'error',
        text: 'Generate an OTP first',
      })
      return
    }

    try {
      setIsVerifying(true)
      setMessage(null)

      const res = await verifyPasswordResetOtp({
        email: email.trim(),
        otp: code,
      })

      if (res?.resetToken) {
        setMessage({
          type: 'success',
          text: res.message,
        })

        setTimeout(() => {
          navigate({
            to: `/reset-password?token=${encodeURIComponent(res.resetToken)}`,
          })
        }, 2000)

        return
      }

      if (res?.status === 429) {
        setTimeout(() => {
          navigate({ reloadDocument: true })
        }, 2000)

        return
      }

      setMessage({
        type: 'error',
        text: res.message ?? 'Something went wrong',
      })
    } catch (error) {
      setMessage({
        type: 'error',
        text: `${error}`,
      })
    } finally {
      setIsVerifying(false)
    }
  }

  return (
    <FormCard className="auth-card" title='Forgot Password'>
      {message && (
        <p className="form-message" data-type={message.type} role="alert">
          {message.text}
        </p>
      )}

      <form onSubmit={handleVerifyOtp} className="auth-card-form">
        <FormInput
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          type="button"
          onClick={handleSendOtp}
          disabled={isSending || mailSent}
        >
          {isSending ? 'Sending...' : mailSent ? 'OTP Sent' : 'Send OTP'}
        </button>

        <div className="flex justify-between gap-2">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(element) => {
                otpRefs.current[index] = element
              }}
              name={`otp-Input-${index}`}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onPaste={handleOtpPaste}
              onKeyDown={(e) => handleOtpKeyDown(index, e)}
              className="h-12 w-12 border text-center text-xl"
              aria-label={`OTP digit ${index + 1}`}
            />
          ))}
        </div>

        <button
          type="submit"
          disabled={otp.join('').length !== 6 || !mailSent || isVerifying}
        >
          {isVerifying ? 'Verifying...' : 'Verify OTP'}
        </button>
      </form>
    </FormCard>
  )
}
