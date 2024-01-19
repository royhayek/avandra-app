// Packages
import axios from 'axios';

// Utilities
import { ProfileFormValues } from '@shared/types/ProfileFormProps';

// Calls

export const getUserInfo = (payload: unknown) => axios.get('user', { params: payload });

export const updateUser = (payload: ProfileFormValues) => axios.patch(`user/update/${payload._id}`, payload);
