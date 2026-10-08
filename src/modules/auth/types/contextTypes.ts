export interface User {
  username: string;
  email: string;
  emailVerified: boolean;
}

export interface AuthResponse {
  message: string;
  token: string;
  user: User;
}
