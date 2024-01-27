// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-evenly'
    },
    content: {
      alignItems: 'center'
    },
    logo: {
      width: ms(80),
      height: ms(80),
      marginBottom: mvs(50)
    },
    title: {
      textAlign: 'center',
      marginBottom: mvs(12)
    },
    socialButtons: {
      gap: 28,
      marginHorizontal: ms(24)
    },
    infoPages: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center'
    }
  });
