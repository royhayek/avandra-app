// Packages
import { createAsyncThunk } from '@reduxjs/toolkit';

// Utilities
import { getWalkthrough } from '@redux/app/api';

// Actions

export const getWalkthroughAction = createAsyncThunk('walkthrough/list', async (payload, { rejectWithValue }) => {
  try {
    const response = await getWalkthrough();

    console.debug('[getWalkthroughAction - response] :: ', response.data);

    return response.data;
  } catch (error: any) {
    console.error('[getWalkthroughAction - error] :: ', error);

    rejectWithValue(error.response?.data?.message);
  }
});
