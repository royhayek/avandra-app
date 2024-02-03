// Packages
import { persistCombineReducers, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Slices
import appReducer from './app/slice';
import authReducer from './auth/slice';
import userReducer from './user/slice';
import placesReducer from './places/slice';
import plannerReducer from './planner/slice';
import itineraryReducer from './itinerary/slice';
import snackbarSliceReducer from './snackbar/slice';
import destinationsReducer from './destinations/slice';

const persistStorageConfig = {
  key: 'ai-trip-app',
  storage: AsyncStorage,
  timeout: 0
};

const appPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['config', 'messagesCount', 'lastSentDate', 'subProducts', 'subscriptions', 'ownedSubscriptions']
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
  places: placesReducer,
  planner: plannerReducer,
  itinerary: itineraryReducer,
  snackbar: snackbarSliceReducer,
  destinations: destinationsReducer
});
