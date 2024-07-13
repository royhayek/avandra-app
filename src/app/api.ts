// Packages
import moment from 'moment';
import axios, { AxiosError } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'moment-timezone';

// Utilities
import i18n from './i18n';
import { store } from './store';
import { logout } from '@shared/utils';
import getEnvVars from '../../environment';
import { appActions } from '@redux/app/slice';
import { authActions } from '@redux/auth/slice';
import _ from 'lodash';

const { serverApiUrl } = getEnvVars();

__DEV__ && console.info('[api - serverApiUrl] :: ', serverApiUrl);

axios.defaults.baseURL = serverApiUrl;

axios.interceptors.request.use(async (req) => {
  // Set common config
  req.baseURL = serverApiUrl;
  req.headers.Accept = 'application/json';
  req.headers['timeZone'] = moment.tz.guess();
  req.headers['Accept-Language'] = i18n.locale;

  req.paramsSerializer = {
    serialize: (params) => JSON.stringify(params)
  };

  // Set auth token if applicable
  const storeState = store.getState();
  const accessToken = storeState?.auth.token;
  req.headers.Authorization = `Bearer ${accessToken}` ?? '';

  // Set language
  req.headers.language = i18n.locale || store.getState().app.language;

  return req;
});

axios.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    console.info('[api - error] :: error: ', error);
    console.info('[api - error] :: error code: ', error.code);
    console.info('[api - error] :: message: ', error.message);
    console.info('[api - error] :: status', error.status);
    console.info('[api - error] :: response status', error?.response?.status);
    console.info('-------------------------------------------------');

    const originalRequest = error.config;

    if (error.code === 'ERR_NETWORK') {
      store.dispatch(appActions.setNetworkError({ message: error.message, status: error.code }));
      throw error;
    }

    if (error?.response && (error.response.status === 401 || error.response.status === 403)) {
      const storeState = store.getState();
      const refreshToken = storeState?.auth.refreshToken;

      const response = await fetch(`${serverApiUrl}/auth/refresh-token`, {
        credentials: 'include',
        headers: { Authorization: refreshToken }
      });

      console.debug('response.status', response.status);

      if (response.status === 200) {
        const data = await response.json();
        console.debug('data', data);
        const { accessToken } = data;
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        store.dispatch(authActions.update({ token: accessToken }));

        return axios(originalRequest);
      }
    }

    if (error?.response && error?.response?.status === 500 && error.response.data.jwtExpired) {
      logout('Session expired, forced logout');
    }

    throw error;
  }
);
