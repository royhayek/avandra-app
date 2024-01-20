// Packages
import { IconButton, IconButtonProps, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { ms } from 'react-native-size-matters';
import React from 'react';
import _ from 'lodash';
// Utilities
import LeftChevron from '../../../../shared/assets/icons/LeftChevron';
import i18n from '../../../../app/i18n';
import makeStyles from './styles';
import { StyleProp, ViewStyle } from 'react-native';

// Interfaces
interface BackButtonProps extends Omit<IconButtonProps, 'icon'> {
  title?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

// Component
const BackButton: React.FC<BackButtonProps> = ({ title, onPress, style, ...props }) => {
  // Statics
  const theme = useTheme();
  const styles = makeStyles(theme);
  const navigation = useNavigation();

  // Renderers
  return (
    <IconButton
      size={ms(18)}
      style={[styles.container, style]}
      onPress={() => navigation.goBack()}
      icon={() => (
        <LeftChevron color={theme.dark ? theme.colors.white : theme.colors.black} style={{ transform: [{ rotateY: i18n.locale === 'ar' ? '180deg' : '0deg' }] }} />
      )}
      {...props}
    />
  );
};

BackButton.defaultProps = {
  title: 'Submit',
  onPress: () => null
};

export default BackButton;
