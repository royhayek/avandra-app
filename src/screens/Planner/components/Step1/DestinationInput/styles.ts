// Pckages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      marginTop: mvs(6),
      minHeight: mvs(40),
      borderRadius: ms(8),
      marginBottom: mvs(8),
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: ms(24),
      borderWidth: theme.dark ? 1 : 0,
      borderColor: theme.dark ? theme.colors.secondary : 'transparent',
      backgroundColor: theme.dark ? 'transparent' : theme.colors.inputBg
    },
    textInput: {
      ...theme.fonts.titleSmall,
      justifyContent: 'center',
      backgroundColor: 'transparent'
    },
    listView: {
      borderRadius: ms(8),
      borderWidth: ms(0.5),
      borderColor: theme.colors.lightGray
    },
    textInputContainer: {
      minHeight: mvs(40),
      alignItems: 'center',
      paddingHorizontal: ms(16)
    }
  });
