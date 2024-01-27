// Packages
import { ms, mvs } from 'react-native-size-matters';
import { StyleSheet } from 'react-native';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: ms(24)
    },
    firstContent: {
      paddingBottom: mvs(30)
    },
    secondContent: {
      flex: 1,
      paddingVertical: mvs(16)
    },
    maxDays: {
      marginTop: mvs(6),
      marginHorizontal: ms(5),
      color: theme.dark ? theme.colors.white : theme.colors.black
    },
    whatMonth: {
      marginTop: mvs(24),
      marginBottom: mvs(16)
    },
    footer: {
      flexDirection: 'row',
      paddingVertical: mvs(16),
      paddingHorizontal: ms(24),
      justifyContent: 'space-between'
    }
  });
