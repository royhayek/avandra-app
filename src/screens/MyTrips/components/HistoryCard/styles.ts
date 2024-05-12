// Packages
import { StyleSheet } from 'react-native';
import { AppTheme } from '@shared/assets/theme';

// Interfaces
import { ms, mvs } from 'react-native-size-matters';

export default (theme: AppTheme, isExpired: boolean) =>
  StyleSheet.create({
    container: {
      height: mvs(260),
      borderRadius: ms(16)
    },
    verticalContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: mvs(16)
    },
    verticalImage: {
      width: ms(70),
      height: ms(70),
      borderRadius: ms(16),
      opacity: isExpired ? 0.3 : 1
    },
    verticalInfoContent: {
      left: 0,
      right: 0,
      bottom: 0,
      margin: ms(16),
      padding: ms(16),
      marginTop: mvs(9),
      borderRadius: ms(16),
      position: 'absolute',
      backgroundColor: theme.colors.background
    },
    horizontalInfoContent: {
      flex: 1,
      marginHorizontal: ms(10)
    },
    flex1: {
      flex: 1
    },
    tripCard: {
      alignItems: 'center',
      flexDirection: 'row'
    },
    deleteBtn: {
      top: 0,
      right: 0,
      margin: ms(16),
      position: 'absolute',
      borderRadius: ms(8)
    },
    title: {
      marginBottom: mvs(6),
      alignSelf: 'flex-start',
      opacity: isExpired ? 0.3 : 1,
      color: theme.dark ? theme.colors.white : theme.colors.black
    },
    assistant: {
      marginVertical: mvs(1),
      opacity: isExpired ? 0.3 : 1
    },
    date: {
      marginTop: mvs(1),
      opacity: isExpired ? 0.3 : 1
    },
    cityImage: {
      flex: 1,
      width: '100%',
      borderRadius: ms(24)
    },
    dot: {
      marginHorizontal: ms(2),
      color: isExpired ? theme.colors.gray[400] : theme.dark ? theme.colors.white : theme.colors.black
    },
    rowContainer: {
      alignItems: 'center',
      flexDirection: 'row'
      // justifyContent: 'space-between',
    },
    infoItemContainer: {
      gap: ms(5),
      alignItems: 'center',
      flexDirection: 'row'
    },
    // Shimmer
    shimmerMenu: {
      marginEnd: ms(16)
    }
  });
