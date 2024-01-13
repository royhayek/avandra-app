// Packages
import axios from 'axios';
import moment from 'moment';
import { stringify } from 'qs';
import { API_KEY } from '@env';
import { Configuration } from 'openai';
import 'moment-timezone';

// Utilities
import i18n from './i18n';
import { store } from './store';
// import { logout } from 'shared/utils';
// import {ROUTES} from 'shared/constants/routes';

export const openAIConfig = new Configuration({ apiKey: API_KEY });

axios.interceptors.request.use((req) => {
  // Set common config
  req.baseURL = process.env.REACT_APP_BACKEND_URL;
  req.headers.Accept = 'application/json';
  req.headers['timeZone'] = moment.tz.guess();

  req.paramsSerializer = {
    serialize: (params) => stringify(params, { skipNulls: true, allowDots: true })
  };

  // Set auth token if applicable
  const storeState = store.getState();
  const authenticated = storeState?.auth.authenticated;
  const accessToken = storeState?.auth.token;
  req.headers['x-auth-token'] = authenticated ? accessToken : process.env.REACT_APP_TOKEN;

  // Set language
  req.headers.language = i18n.locale || process.env.REACT_APP_DEFAULT_LANGUAGE;

  return req;
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && [401, 403].includes(error.response.status)) {
      const storeState = store.getState();
      const authenticated = storeState?.auth.authenticated;

      if (authenticated) {
        // logout('User unauthenticated, forced logout');
      }

      throw error;
    }

    throw error;
  }
);
