// Packages
import { ms, mvs } from 'react-native-size-matters';
import { StyleSheet } from 'react-native';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: ms(16)
    },
    lottie: {
      width: ms(200),
      height: mvs(200)
    },
    information: {
      textAlign: 'center',
      marginHorizontal: ms(24)
    }
  });
