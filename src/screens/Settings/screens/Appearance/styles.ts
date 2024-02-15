// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: mvs(16)
    },
    radioButton: {
      gap: ms(16),
      paddingVertical: mvs(4),
      alignItems: 'center',
      flexDirection: 'row'
    },
    radioTitle: {
      fontFamily: 'urbanist-medium'
    },
    divider: {
      marginTop: mvs(24)
    }
  });
