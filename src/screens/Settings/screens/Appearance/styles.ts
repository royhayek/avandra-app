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
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: mvs(4),
    },
    radioTitle: {
      fontFamily: 'urbanist-medium'
    },
    divider: {
      marginTop: mvs(24)
    }
  });
