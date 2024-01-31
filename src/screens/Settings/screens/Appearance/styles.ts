// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Utilities
import i18n from '@app/i18n';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    iconAndTitle: {
      gap: ms(16),
      alignItems: 'center',
      flexDirection: 'row'
    },
    buttonName: {
      fontFamily: 'urbanist-bold'
    },
    anchor: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    item: {
      alignItems: 'center',
      flexDirection: 'row',
      marginVertical: mvs(15),
      marginHorizontal: ms(24),
      justifyContent: 'space-between'
    },
    arrowIcon: {
      marginStart: ms(3),
      transform: i18n.locale === 'ar' ? [{ rotateY: '180deg' }] : []
    },
    radioButton: {
      gap: ms(16),
      paddingVertical: mvs(4),
      alignItems: 'center',
      flexDirection: 'row'
    },
    radioTitle: {
      fontFamily: 'urbanist-medium'
    },
    divider: {
      marginTop: mvs(24)
    }
  });
