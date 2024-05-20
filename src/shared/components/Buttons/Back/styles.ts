// Packages
import { StyleSheet } from 'react-native';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background
    },
    title: {
      fontWeight: 'bold',
      color: theme.colors.white
    }
  });
