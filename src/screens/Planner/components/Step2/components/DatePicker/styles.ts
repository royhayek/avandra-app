// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    calendar: {
      marginVertical: mvs(16),
      borderRadius: theme.roundness,
      backgroundColor: theme.dark ? theme.colors.dark[3] : theme.colors.gray[100]
    },
    dateStyle: {
      width: '100%',
      height: mvs(28),
      borderRadius: 0,
      backgroundColor: theme.dark ? theme.colors.gray[800] : theme.colors.gray[300]
    },
    startDateStyle: {
      width: '100%',
      height: mvs(28),
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      borderTopLeftRadius: ms(30),
      borderBottomLeftRadius: ms(30),
      backgroundColor: theme.colors.primary
    },
    endDateStyle: {
      width: '100%',
      height: mvs(28),
      borderTopRightRadius: ms(30),
      borderBottomRightRadius: ms(30),
      backgroundColor: theme.colors.primary
    },
    textStyle: {
      color: theme.colors.white
    }
  });
