// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Utilities
import i18n from '@app/i18n';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    item: {
      alignItems: 'center',
      flexDirection: 'row',
      marginVertical: mvs(15),
      marginHorizontal: ms(24),
      justifyContent: 'space-between'
    },
    iconAndTitle: {
      gap: ms(16),
      alignItems: 'center',
      flexDirection: 'row'
    },
    titleAndDesc: {
      flex: 1
    },
    description: {
      marginTop: 4,
      fontFamily: 'urbanist-regular'
    },
    buttonName: {
      fontFamily: 'urbanist-bold'
    },
    anchor: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    arrowIcon: {
      marginStart: ms(3),
      alignSelf: 'flex-start',
      transform: i18n.locale === 'ar' ? [{ rotateY: '180deg' }] : []
    }
  });
