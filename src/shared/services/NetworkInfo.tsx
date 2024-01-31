// Packages
import NetInfo from '@react-native-community/netinfo';
import React, { useCallback, useEffect, useState } from 'react';
// Components
import FastImage from 'react-native-fast-image';
import { View, StyleSheet } from 'react-native';
import { Modal, Text, useTheme } from 'react-native-paper';
import RegularButton from '@shared/components/Buttons/Regular';
// Utilities
import { t } from '@app/i18n';
// Interfaces
import { TranslateOptions } from 'i18n-js';
import { mvs } from 'react-native-size-matters';

// Component
const _t = (key: string, options?: TranslateOptions) => t(`network.${key}`, options);

const NetworkInfo = () => {
  // Statics
  const [showModal, setShowModal] = useState(false);

  const theme = useTheme();
  const styles = makeStyles(theme);

  // Callbacks
  const handleRetryPress = useCallback(() => {
    NetInfo.fetch().then((state) => state.isConnected && setShowModal(true));
  }, []);

  // Effects
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (!state.isConnected) {
        setShowModal(true);
      } else {
        setShowModal(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // Renderers
  if (showModal) {
    return (
      <Modal visible dismissable={false}>
        <View style={styles.container}>
          <FastImage source={require('../../../assets/no-internet.png')} style={styles.icon} />
          <Text variant="titleSmall" style={styles.text}>
            {_t('no_internet_connection')}
          </Text>
          <RegularButton title={_t('retry_connecting')} onPress={handleRetryPress} />
        </View>
      </Modal>
    );
  }

  return null;
};

export default NetworkInfo;

const makeStyles = (theme) =>
  StyleSheet.create({
    container: {
      width: '80%',
      padding: 24,
      borderRadius: 18,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.background
    },
    icon: {
      width: 85,
      height: 85,
      marginBottom: 5
    },
    text: {
      fontWeight: 'bold',
      marginBottom: mvs(15),
      color: theme.dark ? theme.colors.white : theme.colors.black
    }
  });
