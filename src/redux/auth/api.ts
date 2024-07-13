// Packages
import axios from 'axios';

// Utilities
import { SocialLoginProps } from '@shared/types/SocialLogin';
import { SignInFormValuesProps } from '@shared/types/SignInForm';

// Calls
export const register = (payload: SocialLoginProps) => axios.post('/auth/register', payload);

export const login = (payload: SignInFormValuesProps) => axios.post('/auth/login', payload);

export const resetPassword = (payload: SignInFormValuesProps) => axios.post('/auth/forgot-password', payload);
