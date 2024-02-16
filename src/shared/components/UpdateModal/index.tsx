// Packages
import _ from 'lodash';
import React from 'react';

// Components
import { ActivityIndicator, Modal, Portal, Text } from 'react-native-paper';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
interface UpdateModalProps {
  visible: boolean;
  onDismiss: () => void;
}

// Component
const UpdateModal: React.FC<UpdateModalProps> = ({ visible, onDismiss }) => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <Portal>
      <Modal
        visible={visible}
        dismissable={false}
        onDismiss={onDismiss}
        contentContainerStyle={styles.contentContainer}>
        <ActivityIndicator size={'large'} />
        <Text variant="large" style={styles.title}>
          {t('update.downloading')}
        </Text>
        <Text variant="medium" style={styles.description}>
          {t('update.app_will_restart')}
        </Text>
      </Modal>
    </Portal>
  );
};

export default UpdateModal;
