// Packages
import axios from 'axios';

// Utilities
import { SocialLoginProps } from '@shared/types/SocialLogin';
import { SignInFormValuesProps } from '@shared/types/SignInForm';

// Calls
export const register = (payload: SocialLoginProps) => axios.post('register', payload);

export const validateToken = () => axios.get('validateToken');

export const login = (payload: SignInFormValuesProps) => axios.post('login', payload);

export const resetPassword = (payload: SignInFormValuesProps) => axios.post('forgot-password', payload);
