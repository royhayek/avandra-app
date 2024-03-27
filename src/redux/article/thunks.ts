// Packages
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getArticleDetails, getArticles } from './api';

// Actions

export const getPopularArticlesAction = createAsyncThunk('articles/list', async (payload, { rejectWithValue }) => {
  try {
    const response = await getArticles();

    // console.debug('[getPopularArticlesAction - response] :: ', response.data);

    return response.data;
  } catch (error: any) {
    console.error('[getPopularArticlesAction - error] :: ', error);

    rejectWithValue(error.response?.data?.message);
  }
});

export const getArticleDetailsAction = createAsyncThunk('article/details', async (_id: string, { rejectWithValue }) => {
  try {
    const response = await getArticleDetails(_id);

    console.debug('[getArticleDetailsAction - response] :: ', response.data);

    return response.data;
  } catch (error: any) {
    console.error('[getDestinationsAction - error] :: ', error);

    rejectWithValue(error.response?.data?.message);
  }
});
