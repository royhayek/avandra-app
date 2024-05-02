// Packages
import { StyleSheet } from 'react-native';

// Interfaces
import { AppTheme } from '@shared/assets/theme';
import { ms, mvs } from 'react-native-size-matters';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1
    },
    header: {
      alignItems: 'flex-start',
      justifyContent: 'center',
      flexDirection: 'row'
    },
    searchContainer: {
      flex: 1,
      marginEnd: 24
    },
    backBtn: {
      top: mvs(12),
      marginStart: ms(16),
      marginEnd: ms(8)
    },
    searchInput: {
      marginTop: 0
    },
    content: {
      flex: 1,
      marginTop: ms(12)
    },
    title: {
      marginTop: mvs(12),
      marginBottom: mvs(16),
      marginHorizontal: ms(24)
    },
    listContainer: {
      gap: mvs(16)
      // paddingVertical: mvs(16)
    },
    shimmerView: {
      marginHorizontal: ms(24)
    },
    shimmerItem: {
      height: mvs(28),
      marginBottom: mvs(16)
    }
  });
