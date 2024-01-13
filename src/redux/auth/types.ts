export interface AuthInitialState {
  token: string | null;
  refreshToken: string | null;
  loggedOut: boolean;
  authenticated: boolean;
  loading: boolean;
  error: unknown | string | null;
}

export interface LoginProps {
  email: string;
  password: string;
}
