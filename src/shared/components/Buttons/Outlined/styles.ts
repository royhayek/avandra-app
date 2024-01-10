import { ms, mvs } from 'react-native-size-matters';
import { AppTheme } from '@shared/assets/theme';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      opacity: 1
    },
    disabledContainer: {
      opacity: 0.5
    },
    linearBackground: {
      borderWidth: ms(1.2),
      borderRadius: ms(30),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: mvs(10),
      paddingHorizontal: ms(14),
      borderColor: theme.colors.black,
      backgroundColor: theme.dark ? theme.colors.background : theme.colors.white
    },
    title: {
      paddingHorizontal: ms(3),
      color: theme.dark ? theme.colors.white : theme.colors.black
    },
    endIcon: {
      marginHorizontal: ms(8)
    }
  });
