// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    flex1: {
      flex: 1
    },
    popularDestText: {
      marginTop: mvs(12),
      marginBottom: mvs(16),
      marginHorizontal: ms(24)
    },
    flatListContainer: {
      gap: ms(10),
      paddingBottom: mvs(50),
      paddingHorizontal: ms(24)
    },
    listColumnWrapper: {
      gap: ms(16)
    },
    button: {
      flex: 1
    },
    imageStyle: { borderRadius: ms(10) },
    image: {
      height: mvs(140),
      borderRadius: ms(16),
      justifyContent: 'flex-end'
    },
    name: {
      marginTop: mvs(6),
      paddingHorizontal: ms(5)
    },
    country: {
      paddingHorizontal: ms(5),
      color: theme.colors.secondary
    }
  });
