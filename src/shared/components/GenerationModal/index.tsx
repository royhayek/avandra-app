// Packages
import _ from 'lodash';
import { io } from 'socket.io-client';
import React, { useEffect, useState } from 'react';

// Components
import * as Progress from 'react-native-progress';
import { Modal, Portal, Text } from 'react-native-paper';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import getEnvVars from '../../../../environment';
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
import { TranslateOptions } from 'i18n-js';

interface GenerationModalProps {
  onGenerate: (socketId: string | undefined) => Promise<void>;
}

interface ProgressProps {
  message: string;
  percent: number;
}

// Component
const _t = (key: string, options?: TranslateOptions) => t(`common.${key}`, options);

const GenerationModal: React.FC<GenerationModalProps> = ({ onGenerate }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const [progress, setProgress] = useState<ProgressProps>({ message: 'Starting itinerary generation...', percent: 0 });

  // Effects
  useEffect(() => {
    const { wsUrl } = getEnvVars();
    const socket = io(wsUrl);

    socket.connect();

    socket.on('connect', async () => {
      console.debug('Connected to socket io server');
      await onGenerate(socket.id);
      socket.disconnect();
    });

    socket.on('connect_error', (error) => {
      console.debug('Failed to connect to socket io server', error);
    });

    socket.on('progress', (data) => {
      setProgress(data);
    });

    socket.on('disconnect', () => {
      console.debug('Disconnected from socket io server');
    });

    return () => {
      socket.off('connect');
      socket.off('connect_error');
      socket.off('progress');
      socket.off('disconnect');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Renderers
  return (
    <Portal>
      <Modal visible dismissable={false} contentContainerStyle={styles.modalContainer}>
        <Progress.Circle indeterminate size={60} borderWidth={5} color={theme.colors.primary} />
        <Text variant="h5" style={styles.generate_title}>
          {progress?.message} ({progress?.percent ?? 0}%)
        </Text>
        <Text variant="medium" style={styles.generate_desc}>
          {_t('generating_your_trip_desc')}
        </Text>
      </Modal>
    </Portal>
  );
};

export default GenerationModal;
