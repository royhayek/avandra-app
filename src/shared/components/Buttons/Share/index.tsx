// Packages
import _ from 'lodash';
import React, { useCallback } from 'react';
import { ms } from 'react-native-size-matters';
import { StyleProp, ViewStyle } from 'react-native';
import Share, { ShareOptions } from 'react-native-share';

// Components
import { ExportIcon } from '@shared/assets/icons';
import { IconButton, IconButtonProps } from 'react-native-paper';

// Utilities
import i18n from '@app/i18n';
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
import { ShareDataProps } from '@shared/types/ShareDataProps';

interface ShareButtonProps extends Omit<IconButtonProps, 'icon'> {
  data: ShareDataProps;
  style?: StyleProp<ViewStyle>;
}

// Component
const ShareButton: React.FC<ShareButtonProps> = ({ data, style, ...props }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  // Callbacks
  const handleOnSharePress = useCallback(async () => {
    const { deepLink, message } = data;

    const shareOptions: ShareOptions = {
      message: `${message}\n${deepLink}`,
      failOnCancel: false
    };

    // Share the content
    Share.open(shareOptions);
  }, [data]);

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
