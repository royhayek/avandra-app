// Packages
import { Platform, StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    backgroundImg: {
      height: Platform.OS === 'ios' ? '70%' : '80%'
    },
    content: {
      left: 0,
      right: 0,
      bottom: 0,
      padding: ms(16),
      position: 'absolute',
      borderTopEndRadius: ms(35),
      borderTopStartRadius: ms(35),
      backgroundColor: theme.colors.background,
      height: Platform.OS === 'ios' ? '35%' : '25%'
    },
    title: {
      textAlign: 'center',
      marginBottom: mvs(16),
      color: theme.dark ? theme.colors.white : theme.colors.black
    }
  });
