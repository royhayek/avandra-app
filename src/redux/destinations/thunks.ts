// Packages
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDestinations = createAsyncThunk('destionation/fetch', async (payload) => {
  try {
    const response = await axios.get('http://localhost:4000/api/destination/list', {
      headers: {
        'x-auth-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDUxNzg3NDcsImlkIjoiNjU3NDJkMmQzNzE1ZDJmNTRmMDdkMTk5IiwiaWF0IjoxNzA1MDkyMzQ3fQ.PjTA87Dy3LiWiEEcFVoyWRBtkF7WVYFG2Of2O6-UorA'
      }
    });

    console.debug('[fetchDestinations - response] :: ', response.data);
    return response.data;
  } catch (err) {
    console.error('[fetchDestinations - error] :: ', err);
  }
});
