// Packages
import _ from 'lodash';
import React from 'react';

// Components
import { ActivityIndicator, Modal, Portal, Text } from 'react-native-paper';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';
import { useAppDispatch, useAppSelector, useAppThunkDispatch } from '@app/store';
import { appActions, selectNetworkError } from '@redux/app/slice';
import FastImage from 'react-native-fast-image';
import RegularButton from '../Buttons/Regular';
import { getConfigurationAction } from '@redux/app/thunks';

// Interfaces
interface NetworkErrorModalProps {}

// Component
const NetworkErrorModal: React.FC<NetworkErrorModalProps> = () => {
  // Redux
  const disptch = useAppDispatch();
  const dispatchThunk = useAppThunkDispatch();

  const networkError = useAppSelector(selectNetworkError);
  const { status, message } = networkError || {};

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  // Callbacks
  const onRetryPress = () => {
    disptch(appActions.clearNetworkError());
    dispatchThunk(getConfigurationAction());
  };

  return (
    <Portal>
      <Modal visible dismissable={false} contentContainerStyle={styles.contentContainer}>
        <FastImage source={require('../../../../assets/no-internet.png')} style={styles.icon} />

        <Text variant="large" style={styles.title}>
          {status}
        </Text>

        <Text variant="medium" style={styles.description}>
          {message}
        </Text>

        <RegularButton title={t('network.retry_connecting')} onPress={onRetryPress} />
      </Modal>
    </Portal>
  );
};

export default NetworkErrorModal;
