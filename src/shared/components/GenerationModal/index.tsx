// Packages
import _ from 'lodash';
import React, { useEffect, useState } from 'react';

// Components
import * as Progress from 'react-native-progress';
import { Modal, Portal, Text } from 'react-native-paper';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
import { TranslateOptions } from 'i18n-js';

interface GenerationModalProps {
  isVisible: boolean;
}

// Component
const _t = (key: string, options?: TranslateOptions) => t(`common.${key}`, options);

const GenerationModal: React.FC<GenerationModalProps> = ({ isVisible }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState('Starting itinerary generation...');

  // Effects
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isVisible) {
      setProgress(0);

      interval = setInterval(() => {
        setProgress((prevProgress) => {
          const nextProgress = prevProgress + 1;

          if (nextProgress <= 20) {
            setMessage('Fetching summary and tips...');
          } else if (nextProgress > 20 && nextProgress <= 80) {
            setMessage('Fetching places to visit...');
          } else if (nextProgress > 80 && nextProgress <= 100) {
            setMessage('Finalizing trip details');
          }

          if (nextProgress === 100) {
            clearInterval(interval);
            // setTimeout(onClose, 1000); // Give a slight delay before closing
          }

          return nextProgress;
        });
      }, 600); // Update every 600 milliseconds
    }

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  // Renderers
  return (
    <Portal>
      <Modal visible={isVisible} dismissable={false} contentContainerStyle={styles.modalContainer}>
        <Progress.Circle indeterminate size={60} borderWidth={5} color={theme.colors.primary} />
        <Text variant="h5" style={styles.generate_title}>
          {message} ({progress ?? 0}%)
        </Text>
        <Text variant="medium" style={styles.generate_desc}>
          {_t('generating_your_trip_desc')}
        </Text>
      </Modal>
    </Portal>
  );
};

export default GenerationModal;
