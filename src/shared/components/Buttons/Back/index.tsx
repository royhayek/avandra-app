// Packages
import _ from 'lodash';
import React from 'react';
import { ms } from 'react-native-size-matters';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Components
import { StyleProp, ViewStyle } from 'react-native';
import LeftChevron from '@shared/assets/icons/LeftChevron';
import { IconButton, IconButtonProps } from 'react-native-paper';

// Utilities
import i18n from '@app/i18n';
import makeStyles from './styles';

// Interfaces
import { useAppTheme } from '@shared/assets/theme';

interface BackButtonProps extends Omit<IconButtonProps, 'icon'> {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

// Component
const BackButton: React.FC<BackButtonProps> = ({ style, onPressOut, ...props }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  // Renderers
  return (
    <IconButton
      size={ms(18)}
      style={[styles.container, style]}
      onPressOut={_.isFunction(onPressOut) ? onPressOut : () => navigation.goBack()}
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

export default BackButton;
