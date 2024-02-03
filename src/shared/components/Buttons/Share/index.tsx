// Packages
import _ from 'lodash';
import React, { useCallback } from 'react';
import { ms } from 'react-native-size-matters';
import { StyleProp, ViewStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IconButton, IconButtonProps } from 'react-native-paper';

// Utilities
import i18n from '@app/i18n';
import makeStyles from './styles';
import { ExportIcon } from '@shared/assets/icons';
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
interface ShareButtonProps extends Omit<IconButtonProps, 'icon'> {
  style?: StyleProp<ViewStyle>;
}

// Component
const ShareButton: React.FC<ShareButtonProps> = ({ style, ...props }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  // Callbacks
  const handleOnSharePress = useCallback(() => {
    // Handle share trip logic
    console.debug('Share button pressed');
  }, []);

  // Renderers
  return (
    <IconButton
      size={ms(18)}
      onPress={handleOnSharePress}
      style={[styles.container, style]}
      icon={() => (
        <ExportIcon
          fill={theme.dark ? theme.colors.white : theme.colors.gray[900]}
          style={{ transform: [{ rotateY: i18n.locale === 'ar' ? '180deg' : '0deg' }] }}
        />
      )}
      {...props}
    />
  );
};

export default ShareButton;
