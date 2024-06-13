// Packages
import { StyleSheet } from 'react-native';
import { AppTheme } from '@shared/assets/theme';
import { ms, mvs } from 'react-native-size-matters';

export default (theme: AppTheme) =>
  StyleSheet.create({
    option: {
      gap: ms(8),
      flexDirection: 'row',
      paddingVertical: mvs(16)
    },
    title: {
      fontFamily: 'urbanist-semibold',
      color: theme.dark ? theme.colors.white : theme.colors.gray[900]
    },
    contentStyle: {
      marginTop: 0,
      marginBottom: mvs(8)
    }
  });
