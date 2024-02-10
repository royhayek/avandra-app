// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      height: mvs(46),
      marginTop: mvs(24),
      flexDirection: 'row'
    },
    buttonContainer: {
      flex: 1,
      paddingEnd: 0,
      paddingStart: mvs(6),
      borderTopRightRadius: 0,
      justifyContent: 'center',
      borderBottomRightRadius: 0,
      borderTopLeftRadius: theme.roundness,
      borderBottomLeftRadius: theme.roundness,
      backgroundColor: theme.dark ? theme.colors.dark[3] : theme.colors.gray[100]
    },
    activeButtonContainer: {
      flex: 1,
      paddingStart: 0,
      paddingEnd: mvs(6),
      borderTopLeftRadius: 0,
      justifyContent: 'center',
      borderBottomLeftRadius: 0,
      borderTopRightRadius: theme.roundness,
      borderBottomRightRadius: theme.roundness,
      backgroundColor: theme.dark ? theme.colors.dark[3] : theme.colors.gray[100]
    },
    button: {
      paddingVertical: mvs(8),
      backgroundColor: 'transparent',
      borderRadius: theme.roundness
    },
    activeButton: {
      paddingVertical: mvs(8),
      borderRadius: theme.roundness - 2,
      backgroundColor: theme.colors.primary
    },
    title: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontFamily: 'urbanist-medium',
      color: theme.dark ? theme.colors.white : theme.colors.black
    },
    activeTitle: {
      textAlign: 'center',
      fontWeight: 'bold',
      color: theme.colors.white,
      fontFamily: 'urbanist-bold'
    }
  });
