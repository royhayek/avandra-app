// Packages
import moment from 'moment';
import * as Device from 'expo-device';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import { Dimensions, Platform } from 'react-native';
import { store } from '@app/store';
import { snackbarActions } from '@redux/snackbar/slice';

export const appName = Constants.expoConfig?.name;

export const isAndroid = Platform.OS === 'android';

// Helpers
export const scaledFontSize = (baseFontSize: number) => {
  const widthRatio = Dimensions.get('screen').width / 430;
  const heightRatio = Dimensions.get('screen').height / 932;
  const maxRatio = Math.max(widthRatio, heightRatio);

  return Math.round(baseFontSize * maxRatio);
};

export const wait = (timeout: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

export const registerForPushNotificationsAsync = async () => {
  try {
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
        console.info('[PushNotifications] :: status ', status);
        finalStatus = status;
      }

      if (finalStatus !== 'granted') {
        console.error('Failed to get push token for push notification!');

        return;
      }

      token = (
        await Notifications.getExpoPushTokenAsync({
          projectId: Constants.expoConfig?.extra?.eas?.projectId ?? '7435fea4-bc85-4a71-8526-db121810f0ed'
        })
      ).data;

      const fcmToken = (await Notifications.getDevicePushTokenAsync()).data;
      console.info('[expoToken] :: ', token);
      console.info('[fcmToken] :: ', fcmToken);
    } else {
      console.info('[PushNotifications] :: Must use physical device for Push Notifications');
    }

    return token;
  } catch (error) {
    console.error('[PushNotifications] :: error ', error);

    store.dispatch(
      snackbarActions.showSnackbar({
        type: 'error',
        title: 'Push Notifications Error',
        message: error
      })
    );
  }
};

export const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
  const paddingToBottom = 20;

  return layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom;
};

export const hasArabicCharacters = (text: string) => {
  const arregex =
    /[\u0600-\u06ff]|[\u0750-\u077f]|[\ufb50-\ufbc1]|[\ufbd3-\ufd3f]|[\ufd50-\ufd8f]|[\ufd92-\ufdc7]|[\ufe70-\ufefc]|[\uFDF0-\uFDFD]/;

  return arregex.test(text);
};

export const getMonths = (startDate, endDate) => {
  const betweenMonths = [];

  if (startDate < endDate) {
    const date = moment(startDate).startOf('month');

    while (date < moment(endDate).endOf('month')) {
      betweenMonths.push(moment(date).format('MMMM'));
      date.add(1, 'month');
    }
  }

  return betweenMonths.join(', ');
};

export const parseAIResponse = (response) => {
  try {
    let modifiedResponse = response;

    if (response.includes('=')) {
      modifiedResponse = response.split('=')[1].trim();
    }

    if (response.includes(';')) {
      modifiedResponse = modifiedResponse.replace(';', '');
    }

    if (response.includes('JSON.stringify(')) {
      modifiedResponse = modifiedResponse.replace('JSON.stringify(', '');
    }

    if (response.includes('})')) {
      modifiedResponse = modifiedResponse.replace('})', '}');
    }

    if (response.includes('`')) {
      modifiedResponse = modifiedResponse.replace('`', '}');
    }

    return JSON.parse(modifiedResponse);
  } catch (error) {
    console.debug('[parseAIResponse] :: error ', error);
  }
};

export const formatAmount = (num) => {
  return num ? num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0;
};
