// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Types
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      alignSelf: 'center',
      borderRadius: ms(12),
      backgroundColor: theme.colors.background
    },
    content: {
      padding: ms(24)
    },
    message: {
      marginTop: mvs(12)
    },
    lottie: {
      width: ms(150),
      height: mvs(150),
      alignSelf: 'center'
    }
  });
