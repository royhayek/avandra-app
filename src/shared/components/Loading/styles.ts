// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Types
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      padding: ms(24),
      alignSelf: 'center',
      borderRadius: ms(12),
      backgroundColor: theme.colors.background
    },
    message: {
      marginTop: mvs(12)
    }
  });
