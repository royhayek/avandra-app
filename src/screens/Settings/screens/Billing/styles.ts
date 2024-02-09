// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      paddingTop: mvs(16),
      paddingBottom: mvs(24),
      marginHorizontal: ms(24)
    },
    exireInfo: {
      textAlign: 'center',
      marginHorizontal: ms(24),
      fontFamily: 'urbanist-regular'
    },
    cancelButton: {
      lineHeight: 15,
      color: theme.colors.primary,
      fontFamily: 'urbanist-semibold'
    }
  });
