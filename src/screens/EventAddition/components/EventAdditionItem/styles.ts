// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    rowContainer: {
      paddingEnd: ms(16),
      paddingStart: ms(24),
      alignItems: 'center',
      flexDirection: 'row'
    },
    image: {
      width: ms(115),
      height: ms(75),
      borderRadius: theme.roundness,
      backgroundColor: theme.colors.backdrop
    },
    content: {
      flex: 1,
      gap: mvs(4),
      marginEnd: ms(8),
      marginStart: ms(12)
    },
    name: {
      fontFamily: 'urbanist-bold'
    },
    addEventBtn: {
      marginBottom: mvs(24),
      marginHorizontal: ms(16)
    },
    ratingContainer: {
      gap: ms(4),
      flexDirection: 'row',
      alignItems: 'center'
    },
    ratingText: {
      fontFamily: 'urbanist-bold',
      color: theme.dark ? theme.colors.gray[200] : theme.colors.gray[700]
    }
  });
