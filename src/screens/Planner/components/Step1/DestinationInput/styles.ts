// Pckages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';
import i18n from '@app/i18n';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      marginTop: mvs(12),
      minHeight: mvs(50),
      borderWidth: ms(1),
      alignItems: 'center',
      borderRadius: ms(12),
      marginBottom: mvs(14),
      justifyContent: 'center',
      marginHorizontal: ms(24),
      borderColor: theme.dark ? theme.colors.dark[1] : theme.colors.white,
      backgroundColor: theme.dark ? theme.colors.dark[3] : theme.colors.gray[100]
    },
    textInput: {
      ...theme.fonts.xLarge,
      paddingBottom: 10,
      justifyContent: 'center',
      backgroundColor: 'transparent',
      textAlign: i18n.locale === 'ar' ? 'right' : 'left'
    },
    listView: {
      borderRadius: ms(8),
      borderWidth: ms(0.5),
      borderColor: theme.colors.lightGray
    },
    textInputContainer: {
      minHeight: mvs(50),
      alignItems: 'center',
      paddingHorizontal: ms(16)
    }
  });
