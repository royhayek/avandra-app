// Packages
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDestinations = createAsyncThunk('destionation/fetch', async (payload, { rejectWithValue }) => {
  try {
    const response = await axios.get('destination/list');

    console.debug('[fetchDestinations - response] :: ', response.data);

    return response.data;
  } catch (error: any) {
    console.error('[fetchDestinations - error] :: ', error);

    rejectWithValue(error.response?.data?.message);
  }
});
