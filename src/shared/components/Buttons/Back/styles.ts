import { StyleSheet } from 'react-native';
import { MD3Theme } from 'react-native-paper';
import { ms } from 'react-native-size-matters';
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      borderRadius: ms(8),
      borderWidth: ms(1.2),
      marginHorizontal: ms(8),
      borderColor: theme.dark ? theme.colors.white : theme.colors.black,
      backgroundColor: theme.dark ? theme.colors.background : theme.colors.white
    },
    title: {
      fontWeight: 'bold',
      color: theme.colors.white
    }
  });
