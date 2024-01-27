// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      marginTop: mvs(16),
      borderWidth: ms(1),
      alignItems: 'center',
      flexDirection: 'row',
      paddingVertical: mvs(8),
      paddingHorizontal: ms(16),
      borderRadius: theme.roundness,
      justifyContent: 'space-between',
      borderColor: theme.dark ? theme.colors.dark[5] : theme.colors.gray[200],
      backgroundColor: theme.dark ? theme.colors.dark[3] : theme.colors.gray[100]
    },
    stepperRow: {
      alignItems: 'center',
      flexDirection: 'row'
    },
    noOfDays: { color: theme.colors.secondary, fontFamily: 'urbanist-semibold' },
    button: {
      width: ms(32),
      height: ms(32),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: theme.roundness,
      backgroundColor: theme.colors.primary
    },
    disabledButton: {
      backgroundColor: theme.dark ? theme.colors.gray[700] : theme.colors.lightGray
    },
    value: {
      width: ms(40),
      textAlign: 'center',
      paddingHorizontal: ms(10)
    }
  });
