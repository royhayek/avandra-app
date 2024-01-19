// Utilities
import { UserProps } from 'shared/types/User';

export interface UserInitialState {
  data: UserProps;
  loading: boolean;
  error: unknown | string | null;
}

export interface ProfileModelProps {
  _id: string;
  name: string;
  email: string;
  role?: string;
  status?: boolean;
  password?: string | undefined;
  currentPassword?: string | undefined;
  confPassword?: string | undefined;
}
