// Packages
import { createAsyncThunk } from '@reduxjs/toolkit';

// Api
import { getFaqCategories, getFaqQuestions, getPrivacyPolicy, getTermsAndConditions, submitMessage } from './api';

// Interfaces
import { MessageProps } from '@shared/types/Message';

// Actions

export const getFaqCategoriesAction = createAsyncThunk('faq/categories', async (payload, { rejectWithValue }) => {
  try {
    const response = await getFaqCategories();

    console.debug('[getFaqCategoriesAction - response] :: ', response.data);

    return response.data;
  } catch (error: any) {
    console.error('[getFaqCategoriesAction - error] :: ', error);

    rejectWithValue(error.response?.data?.message);
  }
});

export const getFaqQuestionsAction = createAsyncThunk('faq/questions', async (payload: string, { rejectWithValue }) => {
  try {
    const response = await getFaqQuestions(payload);

    console.debug('[getFaqQuestionsAction - response] :: ', response.data);

    return response.data;
  } catch (error: any) {
    console.error('[getFaqQuestionsAction - error] :: ', error);

    rejectWithValue(error.response?.data?.message);
  }
});

export const submitMessageAction = createAsyncThunk(
  'message/create',
  async (payload: MessageProps, { rejectWithValue }) => {
    try {
      const response = await submitMessage(payload);

      console.debug('[submitMessageAction - response] :: ', response.data);

      return response.data;
    } catch (error: any) {
      console.error('[submitMessageAction - error] :: ', error);

      rejectWithValue(error.response?.data?.message);
    }
  }
);

export const getPrivacyPolicyAction = createAsyncThunk(
  'settings/privacyPolicy',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await getPrivacyPolicy();

      console.debug('[getPrivacyPolicyAction - response] :: ', response.data);

      return response.data;
    } catch (error: any) {
      console.error('[getPrivacyPolicyAction - error] :: ', error);

      rejectWithValue(error.response?.data?.message);
    }
  }
);

export const getTermsAndConditionsAction = createAsyncThunk(
  'settings/termsAndConditions',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await getTermsAndConditions();

      console.debug('[getTermsAndConditionsAction - response] :: ', response.data);

      return response.data;
    } catch (error: any) {
      console.error('[getTermsAndConditionsAction - error] :: ', error);

      rejectWithValue(error.response?.data?.message);
    }
  }
);
