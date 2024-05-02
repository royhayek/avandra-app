import { Platform } from 'react-native';

const localhost = Platform.OS === 'ios' ? 'http://localhost:4000' : 'http://10.0.2.2:4000';

const ENV = {
  development: {
    serverUrl: localhost,
    serverApiUrl: `${localhost}/api`,
    wsUrl: Platform.OS === 'ios' ? 'ws://localhost:4000' : 'ws://10.0.2.2:4000',
    serverAccessToken: '',
    googleMapsApiKey: '***REMOVED***',
    openaiApiUrl: 'https://api.openai.com/v1/',
    openaiApiKey: '***REMOVED***',
    defaultLanguage: 'EN'
  },
  production: {
    serverUrl: 'https://wondrous-app-fs8jj.ondigitalocean.app/',
    serverApiUrl: 'https://wondrous-app-fs8jj.ondigitalocean.app/api',
    wsUrl: 'wss://wondrous-app-fs8jj.ondigitalocean.app',
    serverAccessToken: '',
    googleMapsApiKey: '***REMOVED***',
    openaiApiUrl: 'https://api.openai.com/v1/',
    openaiApiKey: '***REMOVED***',
    defaultLanguage: 'EN'
  }
};

const getEnvVars = (env = __DEV__) => {
  // What is __DEV__ ?
  // This variable is set to true when react-native is running in Dev mode.
  // __DEV__ is true when run locally, but false when published.
  if (env) {
    return ENV.development;
  } else if (env === 'staging') {
    return ENV.staging;
  } else {
    return ENV.production;
  }
};

export default getEnvVars;
