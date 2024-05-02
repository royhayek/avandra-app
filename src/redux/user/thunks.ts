// Packages
// import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Utilities
import { deleteUser, updateUser } from './api';
import { ProfileFormValuesProps } from '@shared/types/ProfileFormProps';
import { snackbarActions } from '@redux/snackbar/slice';

// Actions

export const updateProfileAction = createAsyncThunk(
  'user/update',
  async (payload: ProfileFormValuesProps, { rejectWithValue, dispatch }) => {
    try {
      const response = await updateUser(payload);

      console.debug('[updateProfileAction] :: ', { response });

      return response.data;
    } catch (error: any) {
      console.error('[updateProfileAction] :: ', { error });

      dispatch(
        snackbarActions.showSnackbar({
          delay: 2000,
          type: 'error',
          title: 'Error',
          message: error.response?.data?.message
        })
      );

      return rejectWithValue(error.response?.data?.message);
    }
  }
);

export const deleteAccountAction = createAsyncThunk(
  'user/delete',
  async (userId: string, { rejectWithValue, dispatch }) => {
    try {
      const response = await deleteUser(userId);

      console.debug('[deleteAccountAction - response] :: ', response);

      return response.data;
    } catch (error: any) {
      console.error('[deleteAccountAction] :: ', { error });

      dispatch(
        snackbarActions.showSnackbar({
          delay: 2000,
          type: 'error',
          title: 'Error',
          message: error.response?.data?.message
        })
      );

      return rejectWithValue(error.response?.data?.message);
    }
  }
);
