// Packages
import { createAsyncThunk } from '@reduxjs/toolkit';

// Utilities
import { register } from './api';
import { userActions } from '@redux/user/slice';

// Interfaces
import { SocialLoginProps } from '@shared/types/SocialLoginProps';

// Actions
export const registerAction = createAsyncThunk(
  'auth/register',
  async (args: SocialLoginProps, { rejectWithValue, dispatch }) => {
    try {
      const response = await register(args);

      console.debug('[registerAction] :: response', response)
      if (response.data.success) {
        dispatch(userActions.update({ data: response.data.user }));
      }

      return response.data;
    } catch (error: any) {
      console.error('[registerAction - error] :: ', error);

      return rejectWithValue(error.response?.data?.message);
    }
  }
);
