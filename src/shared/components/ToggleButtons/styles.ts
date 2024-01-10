// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      height: mvs(48),
      marginTop: mvs(24),
      flexDirection: 'row',
      marginHorizontal: ms(16)
    },
    buttonContainer: {
      flex: 1,
      paddingEnd: 0,
      paddingStart: mvs(6),
      borderTopRightRadius: 0,
      justifyContent: 'center',
      borderBottomRightRadius: 0,
      borderTopLeftRadius: ms(30),
      borderBottomLeftRadius: ms(30),
      backgroundColor: theme.colors.primaryLight
    },
    activeButtonContainer: {
      flex: 1,
      paddingStart: 0,
      paddingEnd: mvs(6),
      borderTopLeftRadius: 0,
      justifyContent: 'center',
      borderBottomLeftRadius: 0,
      borderTopRightRadius: ms(30),
      borderBottomRightRadius: ms(30),
      backgroundColor: theme.colors.primaryLight
    },
    button: {
      borderRadius: ms(30),
      paddingVertical: mvs(10.5),
      backgroundColor: 'transparent'
    },
    activeButton: {
      shadowRadius: 1,
      shadowOpacity: 0.2,
      borderRadius: ms(30),
      paddingVertical: mvs(10.5),
      shadowColor: theme.colors.black,
      shadowOffset: { width: 0, height: 1 },
      backgroundColor: theme.colors.primary
    },
    title: {
      textAlign: 'center',
      fontWeight: 'bold',
      color: theme.dark ? theme.colors.white : theme.colors.black
    }
  });
