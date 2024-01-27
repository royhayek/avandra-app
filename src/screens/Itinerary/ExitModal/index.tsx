// Packages
import React, { useCallback } from 'react';
import { ms } from 'react-native-size-matters';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// Components
import { View } from 'react-native';
import { Button, Modal, Text } from 'react-native-paper';
import RegularButton from '@shared/components/Buttons/Regular';
import OutlinedButton from '@shared/components/Buttons/Outlined';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
import { TranslateOptions } from 'i18n-js';

interface ExitModalProps {
  visible: boolean;
  toggle: () => void;
}

// Component
const _t = (key: string, options?: TranslateOptions) => t(`trip.${key}`, options);

const ExitModal: React.FC<ExitModalProps> = ({ visible, toggle }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const navigation = useNavigation();

  // Callbacks
  const handleLeaveScreen = useCallback(() => navigation.goBack(), [navigation]);

  // Renderers
  return (
    <Modal visible={visible} onDismiss={toggle} contentContainerStyle={styles.content}>
      <Button onPress={toggle} style={styles.closeButton}>
        <AntDesign name="close" size={ms(24)} color="grey" />
      </Button>

      <Text style={styles.title}>{_t('save_before_you_go')}</Text>
      <Text style={styles.description}>{_t('you_havent_saved')}</Text>
      <View style={styles.buttonsContainer}>
        <OutlinedButton title={_t('leave')} onPress={handleLeaveScreen} />
        <RegularButton
          style={styles.gobackButton}
          backgroundColors={['black', 'black', 'black']}
          title={_t('go_back')}
          onPress={toggle}
        />
      </View>
    </Modal>
  );
};

export default ExitModal;
