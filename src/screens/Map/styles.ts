// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    map: {
      width: '100%',
      height: '100%'
    },
    backBtn: {
      left: ms(16),
      top: mvs(50),
      position: 'absolute',
      color: theme.colors.white
    },
    scrollView: {
      left: 0,
      right: 0,
      bottom: mvs(70),
      position: 'absolute'
    }
  });
