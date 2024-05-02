// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      paddingBottom: mvs(30),
      marginHorizontal: ms(16)
    },
    background: {
      backgroundColor: theme.colors.background
    },
    title: {
      textAlign: 'center',
      color: theme.dark ? theme.colors.white : theme.colors.gray[900]
    },
    divider: {
      marginVertical: mvs(8)
    },
    content: {
      marginVertical: mvs(8)
    },
    actions: {
      gap: ms(16),
      flexDirection: 'row'
    },
    button: {
      flex: 1,
      marginTop: mvs(8)
    }
  });
