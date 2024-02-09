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
    header: {
      left: ms(16),
      top: mvs(50),
      right: ms(16),
      position: 'absolute',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    backBtn: {
      color: theme.colors.white
    },
    scrollView: {
      left: 0,
      right: 0,
      bottom: mvs(60),
      position: 'absolute'
    },
    themeButton: {
      backgroundColor: theme.colors.background
    },
    actions: {
      right: ms(20),
      bottom: mvs(200),
      position: 'absolute',
      alignItems: 'center'
    }
  });
