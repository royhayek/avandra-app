// Packages
import axios from 'axios';
import moment from 'moment';
import { stringify } from 'qs';
import { Configuration } from 'openai';

// Utils
import 'moment-timezone';

// Utilities
import i18n from './i18n';
import { store } from './store';
import { logout } from '@shared/utils';
import getEnvVars from '../../environment';

const { serverApiUrl } = getEnvVars();

console.debug('[api - serverApiUrl] :: ', serverApiUrl);

export const openAIConfig = new Configuration({ apiKey: process.env.OPENAI_API_KEY });

axios.interceptors.request.use((req) => {
  // Set common config
  req.baseURL = serverApiUrl;
  req.headers.Accept = 'application/json';
  req.headers['timeZone'] = moment.tz.guess();

  req.paramsSerializer = {
    serialize: (params) => stringify(params, { skipNulls: true, allowDots: true })
  };

  // Set auth token if applicable
  const storeState = store.getState();
  const accessToken = storeState?.auth.token;
  req.headers['x-auth-token'] = accessToken ?? '';

  // Set language
  req.headers.language = i18n.locale || store.getState().app.language;

  console.debug('req.baseURL', req.baseURL);

  return req;
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response?.data?.jwtExpired) {
      const storeState = store.getState();
      const authenticated = storeState?.auth.authenticated;

      if (authenticated) {
        logout('User token expired');
      }

      throw error;
    }

    throw error;
  }
);
