// Packages
import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    shimmer: {
      borderRadius: ms(4)
    }
  });
