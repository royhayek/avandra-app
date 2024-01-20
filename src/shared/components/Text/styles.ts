// Packages
import { StyleSheet } from 'react-native';

// Utilities
import i18n from '@app/i18n';

// Types
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    text: {
      textAlign: i18n.locale === 'ar' ? 'right' : 'left'
    }
  });
