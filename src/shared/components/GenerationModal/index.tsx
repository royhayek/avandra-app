// Packages
import _ from 'lodash';
import React from 'react';

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
  visible: boolean;
  regenerating?: boolean;
}

// Component
const _t = (key: string, options?: TranslateOptions) => t(`common.${key}`, options);

const GenerationModal: React.FC<GenerationModalProps> = ({ visible, regenerating }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  // Renderers
  return (
    <Portal>
      <Modal visible={visible} dismissable={false} contentContainerStyle={styles.modalContainer}>
        <Progress.Circle indeterminate size={60} borderWidth={5} color={theme.colors.primary} />
        <Text variant="h5" style={styles.generate_title}>
          {_t(regenerating ? 'regenerating_your_trip' : 'generating_your_trip', { progress: 0 })}
        </Text>
        <Text variant="medium" style={styles.generate_desc}>
          {_t('generating_your_trip_desc')}
        </Text>
      </Modal>
    </Portal>
  );
};

GenerationModal.defaultProps = {
  visible: false,
  regenerating: false
};

export default GenerationModal;
