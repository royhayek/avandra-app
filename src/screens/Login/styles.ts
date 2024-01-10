// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    backgroundImg: {
      height: '70%'
    },
    content: {
      left: 0,
      right: 0,
      bottom: 0,
      padding: 16,
      height: '35%',
      position: 'absolute',
      borderTopEndRadius: ms(35),
      borderTopStartRadius: ms(35),
      backgroundColor: 'white'
    },
    title: {
      marginBottom: mvs(16),
      textAlign: 'center',
      color: theme.colors.black
    }
  });
