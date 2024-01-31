// Packages
import { ms, mvs } from 'react-native-size-matters';
import { StyleSheet } from 'react-native';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    scrollView: {
      paddingHorizontal: ms(24),
      paddingBottom: mvs(24)
    },
    noOfDays: {
      marginTop: mvs(16)
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
