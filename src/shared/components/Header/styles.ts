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
      flex: 1,
      paddingBottom: mvs(24),
      backgroundColor: theme.colors.background,
      direction: i18n.locale === 'ar' ? 'rtl' : 'ltr'
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
