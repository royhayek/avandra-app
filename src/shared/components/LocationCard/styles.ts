// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme, isHorizontal: boolean) =>
  StyleSheet.create({
    activity: {
      elevation: 2,
      overflow: 'hidden',
      borderWidth: ms(1),
      borderRadius: ms(8),
      paddingHorizontal: ms(12),
      marginBottom: !isHorizontal ? mvs(12) : 0,
      marginHorizontal: !isHorizontal ? 0 : ms(10),
      flexDirection: isHorizontal ? 'row' : 'column',
      paddingVertical: isHorizontal ? mvs(8) : mvs(12),
      borderColor: theme.dark ? theme.colors.secondary : 'transparent',
      backgroundColor: theme.dark ? theme.colors.background : theme.colors.card
    },
    descriptionContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      marginTop: isHorizontal ? 0 : mvs(8)
    },
    imageContainer: {
      justifyContent: 'center',
      paddingEnd: isHorizontal ? ms(12) : 0
    },
    image: {
      borderRadius: ms(8),
      width: isHorizontal ? ms(90) : '100%',
      backgroundColor: theme.colors.background,
      height: isHorizontal ? mvs(90) : mvs(140)
    },
    ratingInfoContainer: {
      alignItems: 'center',
      flexDirection: 'row'
    },
    rating: {
      marginEnd: ms(5),
      color: theme.colors.secondary
    },
    starRatingContainer: {
      marginVertical: mvs(4),
      justifyContent: 'flex-start',
      gap: isHorizontal ? ms(4) : ms(6)
    },
    userRatingTotal: {
      marginStart: ms(5),
      color: theme.colors.secondary
    },
    description: {
      marginVertical: isHorizontal ? 0 : mvs(4)
    },
    address: {
      color: theme.colors.secondary
    }
  });
