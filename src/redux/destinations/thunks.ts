// Packages
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDestinations = createAsyncThunk('destionation/fetch', async (payload) => {
  try {
    const response = await axios.get('http://localhost:4000/api/destination/list', {
      headers: {
        'x-auth-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDI5Mjg2MzYsImlkIjoiNjU3NDJkMmQzNzE1ZDJmNTRmMDdkMTk5IiwiaWF0IjoxNzAyODQyMjM2fQ.FJlyOV2XQvv1Ng_MgXRBidC-z-1vWlbY-ajEMtoATO4'
      }
    });

    console.debug('[fetchDestinations - response] :: ', response.data);
    return response.data;
  } catch (err) {
    console.error('[fetchDestinations - error] :: ', err);
  }
});
