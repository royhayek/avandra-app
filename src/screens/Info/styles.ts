// Packages
import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: ms(16),
      direction: 'ltr',
      backgroundColor: theme.colors.background
    }
  });
