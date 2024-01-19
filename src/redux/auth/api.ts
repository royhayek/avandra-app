// Packages
import axios from 'axios';

// Utilities
import { SocialLoginProps } from '@shared/types/SocialLoginProps';

// Calls
export const register = (payload: SocialLoginProps) => axios.post('register', payload);
