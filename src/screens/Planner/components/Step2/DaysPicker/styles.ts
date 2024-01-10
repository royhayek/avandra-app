// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      padding: ms(8),
      height: mvs(50),
      marginTop: mvs(16),
      borderWidth: ms(1),
      borderRadius: ms(3),
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderColor: theme.colors.lightGray
    },
    stepperRow: {
      alignItems: 'center',
      flexDirection: 'row'
    },
    button: {
      width: ms(33),
      height: mvs(33),
      borderRadius: ms(50),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.primary
    },
    disabledButton: {
      backgroundColor: theme.colors.lightGray
    },
    value: {
      width: ms(30),
      paddingHorizontal: ms(10)
    }
  });
