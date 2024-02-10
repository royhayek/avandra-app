// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';
import i18n from '@app/i18n';

export default (theme: AppTheme) =>
  StyleSheet.create({
    list: {
      gap: mvs(16),
      paddingVertical: mvs(24)
    },
    date: {
      marginTop: mvs(8),
      paddingHorizontal: ms(16)
    },
    rowContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      marginHorizontal: ms(24)
    },
    image: {
      width: ms(105),
      height: ms(70),
      borderRadius: theme.roundness
    },
    content: {
      flex: 1,
      gap: mvs(4),
      marginEnd: ms(8),
      marginStart: ms(12)
    },
    country: {
      fontFamily: 'urbanist-semibold'
    },
    city: {
      fontFamily: 'urbanist-medium',
      color: theme.dark ? theme.colors.white : theme.colors.gray[700]
    },
    arrowIcon: {
      marginStart: ms(3),
      transform: i18n.locale === 'ar' ? [{ rotateY: '180deg' }] : []
    }
  });
