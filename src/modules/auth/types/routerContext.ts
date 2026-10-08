import type { User } from "./authTypes";

export type AuthRouterContext = {
  user: User | null;
  isAuthenticated: boolean;
  isInitializing: boolean;
};
