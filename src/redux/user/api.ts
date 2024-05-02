// Packages
import axios from 'axios';

// Utilities
import { ProfileFormValuesProps } from '@shared/types/ProfileFormProps';

// Calls

export const getUserInfo = (payload: unknown) => axios.get('user', { params: payload });

export const updateUser = (payload: ProfileFormValuesProps) => axios.patch(`user/update/${payload._id}`, payload);

export const deleteUser = (userId: string) => axios.delete(`user/delete/${userId}`);
