// Components
import Header from '@shared/components/Header';

// Utilities
import i18n from '@app/i18n';

// Interfaces
import { AppTheme } from '@shared/assets/theme';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack/lib/typescript/src/types';

export const getScreenOptions = (theme: AppTheme): NativeStackNavigationOptions => {
  return {
    headerShown: true,
    header: (props) => <Header {...props} />,
    headerStyle: { backgroundColor: theme.colors.background },
    contentStyle: {
      backgroundColor: theme.colors.background,
      direction: i18n.locale === 'ar' ? 'rtl' : 'ltr'
    }
  };
};
