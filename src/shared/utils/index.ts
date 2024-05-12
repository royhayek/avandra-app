// Packages
import moment from 'moment';
import { useEffect, useState } from 'react';
import * as Device from 'expo-device';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import { Dimensions, Linking, Platform } from 'react-native';

// Utilities
import socket from '@app/socket';
import { store } from '@app/store';
import { authActions } from '@redux/auth/slice';
import { snackbarActions } from '@redux/snackbar/slice';

export const appName = Constants.expoConfig?.name;

export const isAndroid = Platform.OS === 'android';

// Helpers
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

export const hasArabicCharacters = (text: string) => {
  const arregex =
    /[\u0600-\u06ff]|[\u0750-\u077f]|[\ufb50-\ufbc1]|[\ufbd3-\ufd3f]|[\ufd50-\ufd8f]|[\ufd92-\ufdc7]|[\ufe70-\ufefc]|[\uFDF0-\uFDFD]/;

  return arregex.test(text);
};

export const formatAmount = (num: number) => (num ? num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0);

export const formatDate = (date: string, format = 'MMMM DD, YYYY') => moment(date).format(format);

export const logout = (reason: string) => {
  store.dispatch(authActions.update({ authenticated: false }));
  console.info(`[Logout] :: Reason: ${reason}`);
};

export const openMapsWithCoords = (name: string, lat: number, lng: number) => {
  const scheme = Platform.OS === 'ios' ? 'maps://0,0?q=' : 'geo:0,0?q=';
  const latLng = `${lat},${lng}`;
  const label = name;

  const url = Platform.OS === 'ios' ? `${scheme}${label}@${latLng}` : `${scheme}${latLng}(${label})`;
  Linking.openURL(url);
};

export const useSocketSetup = (enabled: boolean) => {
  const [isConnected, setIsConnected] = useState(false);
  const [progress, setProgress] = useState({ message: 'Starting itinerary generation...', progress: 0 });

  useEffect(() => {
    if (enabled) {
      socket.connect();

      socket.on('connect', () => {
        console.debug('Connected to socket io server');
        setIsConnected(true);
      });

      socket.on('connect_error', (error) => {
        console.debug('Failed to connect to socket io server', error);
      });

      socket.on('progress', (data) => {
        setProgress(data);
      });

      socket.on('disconnect', () => {
        console.debug('Disconnected from socket io server');
        setIsConnected(false);
      });

      return () => {
        socket.off('connect');
        socket.off('connect_error');
        socket.off('progress');
        socket.off('disconnect');
      };
    }
  }, [enabled]);

  return { isConnected, socketId: socket.id, progress };
};
