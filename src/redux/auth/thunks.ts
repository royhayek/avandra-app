// Packages
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Utilities
import { login, register } from './api';
import { userActions } from '@redux/user/slice';
import { snackbarActions } from '@redux/snackbar/slice';

// Interfaces
import { SocialLoginProps } from '@shared/types/SocialLogin';
import { SignInFormValuesProps } from '@shared/types/SignInForm';

// Actions
export const registerAction = createAsyncThunk(
  'auth/register',
  async (args: SocialLoginProps, { rejectWithValue, dispatch }) => {
    try {
      const response = await register(args);

      console.debug('[registerAction] :: response', response);

      if (response.data?.success) {
        dispatch(userActions.update({ data: response.data.user }));
      }

      return response.data;
    } catch (error: any) {
      console.error('[registerAction - error] :: ', error.response?.data?.message);
      if (error.response?.data?.message)
        dispatch(snackbarActions.showSnackbar({ message: error.response?.data?.message }));

      return rejectWithValue(error.response?.data?.message);
    }
  }
);

export const loginAction = createAsyncThunk(
  'auth/login',
  async (args: SignInFormValuesProps, { rejectWithValue, dispatch }) => {
    try {
      const response = await login(args);

      console.debug('[loginAction] :: response', response.data);

      if (response.data?.success) dispatch(userActions.update({ data: response.data.user }));

      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;

      return response.data;
    } catch (error: any) {
      console.error('[loginAction - error] :: ', error.response?.data?.message);

      if (error.response?.data?.message)
        dispatch(snackbarActions.showSnackbar({ message: error.response?.data?.message }));

      return rejectWithValue(error.response?.data);
    }
  }
);
