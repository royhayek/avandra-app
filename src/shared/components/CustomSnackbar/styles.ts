// Packages
import { StyleSheet } from 'react-native';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    wrapper: {
      top: 50
    },
    container: {
      backgroundColor: theme.colors.redSurface
    },
    message: {
      color: theme.colors.white,
      fontFamily: 'urbanist-bold'
    }
  });
