// Packages
import { createAsyncThunk } from '@reduxjs/toolkit';

// Utilities
import { getConfig, getWalkthrough, storeDeviceInfo } from '@redux/app/api';
import { DeviceDataProps } from '@shared/types/DeviceInfo';

// Actions

export const getWalkthroughAction = createAsyncThunk('walkthrough/list', async (payload, { rejectWithValue }) => {
  try {
    const response = await getWalkthrough();

    // console.debug('[getWalkthroughAction - response] :: ', response.data);

    return response.data;
  } catch (error: any) {
    console.error('[getWalkthroughAction - error] :: ', error);

    rejectWithValue(error.response?.data?.message);
  }
});

export const getConfigurationAction = createAsyncThunk('app/config', async (payload, { rejectWithValue }) => {
  try {
    const response = await getConfig();

    // console.debug('[getConfigurationAction - response] :: ', response.data);

    return response.data;
  } catch (error: any) {
    console.error('[getConfigurationAction - error] :: ', error);

    rejectWithValue(error.response?.data?.message);
  }
});

export const storeDeviceInfoAction = createAsyncThunk(
  'app/device',
  async (payload: DeviceDataProps, { rejectWithValue }) => {
    try {
      const response = await storeDeviceInfo(payload);

      // console.debug('[storeDeviceInfoAction - response] :: ', response.data);

      return response.data;
    } catch (error: any) {
      console.error('[storeDeviceInfoAction - error] :: ', error);

      rejectWithValue(error.response?.data?.message);
    }
  }
);
