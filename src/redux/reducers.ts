// Packages
import { persistCombineReducers, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Slices
import appReducer from './app/slice';
import authReducer from './auth/slice';
import userReducer from './user/slice';
import articleReducer from './article/slice';
import plannerReducer from './planner/slice';
import settingsReducer from './settings/slice';
import itineraryReducer from './itinerary/slice';
import snackbarSliceReducer from './snackbar/slice';
import destinationReducer from './destination/slice';

const persistStorageConfig = {
  key: 'ai-trip-app',
  storage: AsyncStorage,
  timeout: 0
};

const appPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [
    'config',
    'messagesCount',
    'lastSentDate',
    'subProducts',
    'subscriptions',
    'ownedSubscriptions',
    'networkError'
  ]
};

const persistSessionConfig = {
  key: 'session',
  storage: AsyncStorage,
  timeout: 0,
  blacklist: ['error', 'loading']
};

export default persistCombineReducers(persistStorageConfig, {
  app: persistReducer(appPersistConfig, appReducer),
  auth: persistReducer(persistSessionConfig, authReducer),
  user: userReducer,
  planner: plannerReducer,
  article: articleReducer,
  settings: settingsReducer,
  itinerary: itineraryReducer,
  snackbar: snackbarSliceReducer,
  destination: destinationReducer
});
