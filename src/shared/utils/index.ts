// Packages
import _ from 'lodash';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import * as Device from 'expo-device';
import Constants from 'expo-constants';
import * as SecureStore from 'expo-secure-store';
import * as Notifications from 'expo-notifications';
import { Dimensions, Linking, Platform } from 'react-native';

// Utilities
import { store } from '@app/store';
import { authActions } from '@redux/auth/slice';
import { DEVICE_ID_KEY } from '@shared/constants';

// Helpers
export const appName = Constants.expoConfig?.name;

export const isAndroid = Platform.OS === 'android';

export const isTablet = Device.deviceType === Device.DeviceType.TABLET;

export const GOOGLE_MAPS_API_KEY = Platform.select({
  ios: Constants.expoConfig?.ios?.config?.googleMapsApiKey,
  android: Constants.expoConfig?.android?.config?.googleMaps?.apiKey
});

export const GOOGLE_WEB_API_KEY = Constants.expoConfig?.extra?.googleWebApiKey;

export const scaledFontSize = (baseFontSize: number) => {
  const widthRatio = Dimensions.get('screen').width / 430;
  const heightRatio = Dimensions.get('screen').height / 932;
  const maxRatio = Math.max(widthRatio, heightRatio);

  return Device.deviceType === Device.DeviceType.PHONE ? Math.round(baseFontSize * maxRatio) : baseFontSize;
};

export const wait = (timeout: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

export const getDeviceId = async () => {
  try {
    // Check if the deviceId already exists in SecureStore
    let deviceId = await SecureStore.getItemAsync(DEVICE_ID_KEY);

    // If deviceId doesn't exist, create a new one and store it
    if (!deviceId) {
      deviceId = uuidv4();
      await SecureStore.setItemAsync(DEVICE_ID_KEY, deviceId);
    }

    return deviceId;
  } catch (error) {
    console.error('Failed to get or create the deviceId:', error);
    throw new Error('Could not get or create deviceId');
  }
};

export const registerForPushNotificationsAsync = async () => {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C'
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');

      return;
    }

    try {
      const projectId = Constants?.expoConfig?.extra?.eas?.projectId ?? Constants?.easConfig?.projectId;

      if (!projectId) {
        throw new Error('Project ID not found');
      }

      token = (
        await Notifications.getExpoPushTokenAsync({
          projectId
        })
      ).data;

      console.log(token);
    } catch (e) {
      token = `${e}`;
    }
  } else {
    // alert('Must use physical device for Push Notifications');
  }

  return token;
};

export const hasArabicCharacters = (text: string) => {
  const arregex =
    /[\u0600-\u06ff]|[\u0750-\u077f]|[\ufb50-\ufbc1]|[\ufbd3-\ufd3f]|[\ufd50-\ufd8f]|[\ufd92-\ufdc7]|[\ufe70-\ufefc]|[\uFDF0-\uFDFD]/;

  return arregex.test(text);
};

export const formatAmount = (num: number) => (num ? num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0);

export const formatDate = (date: string, format = 'MMMM DD, YYYY') => _.capitalize(moment(date).format(format));

export const logout = (reason: string) => {
  store.dispatch(authActions.update({ authenticated: false }));
  console.info(`[Logout] :: Reason: ${reason}`);
};

export const openMapsWithCoords = (lat: number, lng: number) => {
  const url = `https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${lat},${lng}`;

  Linking.canOpenURL(url)
    .then((supported) => {
      if (!supported) {
      } else {
        return Linking.openURL(url);
      }
    })
    .catch((err) => console.error('An error occurred', err));
};

export const getCategory = (types: string[]) => {
  let category = 'other';

  const typePriority = {
    restaurant: 'restaurant',
    cafe: 'coffeeshop',
    bakery: 'restaurant',
    bar: 'restaurant',
    food: 'restaurant',
    meal_delivery: 'restaurant',
    meal_takeaway: 'restaurant',
    tourist_attraction: 'landmark',
    // point_of_interest: 'landmark',
    museum: 'landmark',
    amusement_park: 'landmark',
    zoo: 'landmark',
    aquarium: 'landmark',
    art_gallery: 'landmark',
    store: 'shop',
    supermarket: 'shop',
    shopping_mall: 'shop',
    clothing_store: 'shop',
    electronics_store: 'shop',
    furniture_store: 'shop',
    hardware_store: 'shop',
    jewelry_store: 'shop',
    book_store: 'shop',
    convenience_store: 'shop',
    liquor_store: 'shop',
    home_goods_store: 'shop',
    lodging: 'accommodation',
    hotel: 'accommodation',
    motel: 'accommodation',
    rv_park: 'accommodation',
    campground: 'accommodation',
    hospital: 'health',
    pharmacy: 'health',
    dentist: 'health',
    doctor: 'health',
    veterinary_care: 'health',
    health: 'health',
    school: 'education',
    university: 'education',
    library: 'education',
    movie_theater: 'entertainment',
    night_club: 'entertainment',
    casino: 'entertainment',
    bowling_alley: 'entertainment',
    stadium: 'entertainment',
    gym: 'entertainment',
    spa: 'entertainment',
    bank: 'service',
    atm: 'service',
    post_office: 'service',
    police: 'service',
    fire_station: 'service',
    local_government_office: 'service',
    insurance_agency: 'service',
    accounting: 'service',
    laundry: 'service',
    car_wash: 'service',
    car_rental: 'service',
    gas_station: 'service',
    airport: 'transport',
    bus_station: 'transport',
    subway_station: 'transport',
    train_station: 'transport',
    taxi_stand: 'transport',
    parking: 'transport',
    park: 'outdoor',
    natural_feature: 'outdoor',
    church: 'worship',
    mosque: 'worship',
    synagogue: 'worship',
    hindu_temple: 'worship',
    place_of_worship: 'worship'
  };

  for (const type of types) {
    if (type in typePriority) {
      category = typePriority[type];
      // Break once we find the first match in the prioritized list
      break;
    }
  }

  return category;
};
