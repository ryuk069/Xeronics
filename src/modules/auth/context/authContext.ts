import { createContext } from "react";
import type { AuthResponse, User } from "../types/contextTypes";

export interface AuthContextValue {
  user: User | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  isInitializing: boolean;
  signIn: (response: AuthResponse) => void;
  signOut: () => Promise<void>;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const AuthContext = createContext<AuthContextValue | null>(null);
