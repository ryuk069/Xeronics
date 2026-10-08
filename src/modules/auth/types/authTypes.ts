export interface LoginRequest {
  identifier: string;
  password: string;
  rememberMe: boolean
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

export interface User {
  username: string;
  email: string;
  emailVerified: boolean;
}

export interface sendOtpReguest {
  email: string;
}

export interface verifyOtpReguest {
  email: string,
  otp: string
}

export interface AuthResponse {
  message: string;
  token: string;
  user: User;
}

export interface resetPasswordRequest {
  resetToken: string,
  newPassword: string
}

export interface ApiErrorData {
  message: string;
  requireEmailVerification?: boolean;
  email?: string;
}

export interface sendVerificationLinkRequest {
  email: string
}
