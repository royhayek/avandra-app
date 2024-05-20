export interface AuthInitialState {
  loading: boolean;
  loggedOut: boolean;
  jwtExpired: boolean;
  token: string | null;
  authenticated: boolean;
  refreshToken: string | null;
  error: unknown | string | null;
}

export interface LoginProps {
  email: string;
  password: string;
}
