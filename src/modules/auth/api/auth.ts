import { api } from "#/shared/api/client";
import type { LoginRequest, RegisterRequest, resetPasswordRequest, sendOtpReguest, sendVerificationLinkRequest, verifyOtpReguest } from "../types/authTypes";


export async function login(credentials: LoginRequest) {
  return api({
    endpoint: "/api/v1/auth/login",
    method: "POST",
    body: credentials,
    addCookies: true
  });
}

export async function signUp(credentials: RegisterRequest) {
  return api({
    endpoint: "/api/v1/auth/signup",
    method: "POST",
    body: credentials,
  });
}

export async function refreshToken() {
  return api({
    endpoint: "/api/v1/auth/refresh",
    method: "POST",
    addCookies: true
  })
}

export async function logout(token: string) {
  return api({
    endpoint: "/api/v1/auth/logout",
    method: "POST",
    token,
    addCookies: true
  })
}

export async function sendPasswordResetOtp(credentials: sendOtpReguest) {
  return api({
    endpoint: "/api/v1/auth/password/forgot/send-otp",
    method: "POST",
    body: credentials,
  })
}

export async function verifyPasswordResetOtp(credentials: verifyOtpReguest) {
  return api({
    endpoint: "/api/v1/auth/password/forgot/verify-otp",
    method: "POST",
    body: credentials,
  })
}

export async function resetPassword(credentials: resetPasswordRequest) {
  return api({
    endpoint: "/api/v1/auth/password/reset",
    method: "POST",
    body: credentials,
  })
}

export async function sendVerificationLink(credentials: sendVerificationLinkRequest) {
  return api({
    endpoint: "/api/v1/auth/email/verification",
    method: 'POST',
    body: credentials
  });
}

export async function verifyVerificationLink(token: string) {
  return api({
    endpoint: `/api/v1/auth/email/verify?${new URLSearchParams({ token })}`,
    method: 'GET',
  });
}
