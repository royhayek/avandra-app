// Packages
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Slices
import appReducer from './app/slice';
import authReducer from './auth/slice';
import placesReducer from './places/slice';
import itineraryReducer from './itinerary/slice';
import snackbarSliceReducer from './snackbar/slice';
import destinationsReducer from './destinations/slice';

const appPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['config', 'messagesCount', 'lastSentDate', 'subProducts', 'subscriptions', 'ownedSubscriptions']
};

export default combineReducers({
  app: persistReducer(appPersistConfig, appReducer),
  auth: authReducer,
  itinerary: itineraryReducer,
  destinations: destinationsReducer,
  places: placesReducer,
  snackbar: snackbarSliceReducer
});
