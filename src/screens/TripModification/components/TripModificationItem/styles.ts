// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    list: {
      gap: mvs(16),
      paddingVertical: mvs(16)
    },
    date: {
      marginTop: mvs(8),
      paddingHorizontal: ms(16)
    },
    rowContainer: {
      paddingStart: ms(2),
      alignItems: 'center',
      flexDirection: 'row',
      paddingVertical: mvs(6),
      marginHorizontal: ms(6)
    },
    activeRowContainer: {
      shadowOffset: {
        width: 0,
        height: 1
      },
      elevation: 3,
      shadowRadius: 5,
      shadowOpacity: 0.16,
      shadowColor: '#04060f',
      borderRadius: theme.roundness,
      backgroundColor: theme.dark ? theme.colors.dark[3] : theme.colors.white
    },
    image: {
      width: ms(105),
      height: ms(75),
      marginStart: ms(12),
      borderRadius: theme.roundness,
      backgroundColor: theme.colors.backdrop
    },
    content: {
      flex: 1,
      gap: mvs(2),
      marginEnd: ms(8),
      marginStart: ms(12)
    },
    type: {
      fontFamily: 'urbanist-medium',
      color: theme.dark ? theme.colors.white : theme.colors.gray[700]
    },
    name: {
      lineHeight: mvs(18),
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
