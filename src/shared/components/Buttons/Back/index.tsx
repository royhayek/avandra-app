// Packages
import _ from 'lodash';
import React from 'react';
import { ms } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import { IconButton, IconButtonProps } from 'react-native-paper';

// Utilities
import i18n from '@app/i18n';
import makeStyles from './styles';
import LeftChevron from '@shared/assets/icons/LeftChevron';

// Interfaces
import { useAppTheme } from '@shared/assets/theme';
import { StyleProp, ViewStyle } from 'react-native';

interface BackButtonProps extends Omit<IconButtonProps, 'icon'> {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

// Component
const BackButton: React.FC<BackButtonProps> = ({ style, onPressOut, ...props }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const navigation = useNavigation();

  // Renderers
  return (
    <IconButton
      size={ms(18)}
      style={[styles.container, style]}
      onPressOut={_.isFunction(onPressOut) ? onPressOut : () => navigation.goBack()}
      // onPress={() => navigation.goBack()}
      icon={() => (
        <LeftChevron
          color={theme.dark ? theme.colors.white : theme.colors.black}
          style={{ transform: [{ rotateY: i18n.locale === 'ar' ? '180deg' : '0deg' }] }}
        />
      )}
      {...props}
    />
  );
};

BackButton.defaultProps = {
  onPress: () => null
};

export default BackButton;
