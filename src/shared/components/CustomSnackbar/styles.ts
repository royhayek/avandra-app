// Packages
import { StyleSheet } from 'react-native';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    wrapper: {
      top: 50
    },
    message: {
      color: theme.colors.white,
      fontFamily: 'urbanist-bold'
    }
  });
