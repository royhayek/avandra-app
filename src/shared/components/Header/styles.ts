// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Utilities
import i18n from '@app/i18n';

// Types
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    safeAreaView: {
      height: mvs(80),
      paddingBottom: mvs(8),
      backgroundColor: theme.colors.background,
      direction: i18n.locale === 'ar' ? 'rtl' : 'ltr'
    },
    absoluteView: {
      top: 0,
      end: 0,
      start: 0,
      paddingBottom: 0,
      position: 'absolute',
      backgroundColor: 'transparent'
    },
    container: {
      minHeight: mvs(48),
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: ms(4),
      marginHorizontal: ms(16),
      justifyContent: 'space-between'
    },
    appName: {
      left: 0,
      right: 0,
      textAlign: 'center',
      alignSelf: 'center',
      position: 'absolute'
    }
  });
