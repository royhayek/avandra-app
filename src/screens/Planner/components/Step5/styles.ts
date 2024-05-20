// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      paddingTop: mvs(16),
      paddingBottom: mvs(50),
      paddingHorizontal: ms(24)
    },
    section: {
      flex: 1,
      gap: ms(16),
      flexDirection: 'row',
      marginVertical: mvs(12)
    },
    row: {
      gap: ms(20),
      marginTop: mvs(8),
      flexDirection: 'row'
    },
    countryRow: {
      gap: ms(10),
      marginTop: mvs(6),
      alignItems: 'center',
      flexDirection: 'row'
    },
    image: {
      width: ms(110),
      height: ms(70),
      borderRadius: theme.roundness
    },
    country: {
      fontFamily: 'urbanist-medium'
    },
    flex1: {
      flex: 1
    },
    titleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    title: {
      top: -1,
      paddingBottom: mvs(6),
      fontFamily: 'urbanist-semibold'
    },
    value: {
      fontFamily: 'urbanist-medium',
      color: theme.dark ? theme.colors.white : theme.colors.gray[900]
    },
    editIcon: {
      margin: 0
    }
  });
