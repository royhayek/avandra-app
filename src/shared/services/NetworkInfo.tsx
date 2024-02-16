// Packages
import { ms, mvs } from 'react-native-size-matters';
import NetInfo from '@react-native-community/netinfo';
import React, { useCallback, useEffect, useState } from 'react';

// Components
import FastImage from 'react-native-fast-image';
import { View, StyleSheet } from 'react-native';
import { Modal, Text } from 'react-native-paper';
import RegularButton from '@shared/components/Buttons/Regular';

// Utilities
import { t } from '@app/i18n';
import { AppTheme, useAppTheme } from '@shared/assets/theme';

// Interfaces
import { TranslateOptions } from 'i18n-js';

// Component
const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      width: '80%',
      padding: ms(24),
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: theme.roundness,
      backgroundColor: theme.colors.background
    },
    icon: {
      width: ms(85),
      height: ms(85),
      marginBottom: mvs(12)
    },
    text: {
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: mvs(24),
      color: theme.dark ? theme.colors.white : theme.colors.black
    },
    button: {
      width: '100%'
    }
  });

const _t = (key: string, options?: TranslateOptions) => t(`network.${key}`, options);

const NetworkInfo = () => {
  // Statics
  const [showModal, setShowModal] = useState(false);

  const theme = useAppTheme();
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
          <Text variant="large" style={styles.text}>
            {_t('no_internet_connection')}
          </Text>
          <RegularButton
            variant="secondary"
            style={styles.button}
            onPress={handleRetryPress}
            title={_t('retry_connecting')}
          />
        </View>
      </Modal>
    );
  }

  return null;
};

export default NetworkInfo;
