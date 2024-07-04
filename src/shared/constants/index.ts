import getEnvVars from '../../../environment';

const { serverUrl } = getEnvVars();

export const PUBLIC_URL = `${serverUrl}/uploads`;

export const REVENUECAT_API_KEYS = {
  apple: 'appl_JVBqyUXiqFSEXdBPOLFGXfdJfao',
  google: 'goog_YIRvIoykcoAcTrsSQBDSUxRyfXf'
};

export const ENTITLEMENT_ID = 'Premium';

export const Firebase = {
  CONFIGURATION_REF: 'configuration'
};

export const Endpoints = {
  TEXT_COMPLETIONS: 'completions',
  TEXT_COMPLETIONS_TURBO: 'chat/completions'
};

export const DEVICE_ID_KEY = 'deviceId';

export const GOOGLE_PLACES_API_KEY = '***REMOVED***';

export const PREMIUM_ENABLED = false;
