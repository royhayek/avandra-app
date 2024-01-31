// Packages
import { ms, mvs } from 'react-native-size-matters';
import { StyleSheet } from 'react-native';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: ms(24),
      paddingBottom: mvs(50)
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
    },
    modalContainer: {
      width: '70%',
      padding: ms(24),
      alignSelf: 'center',
      alignItems: 'center',
      borderRadius: ms(16),
      justifyContent: 'center',
      backgroundColor: theme.colors.background
    },
    generate_title: {
      marginTop: mvs(16),
    },
    generate_desc: {
      marginTop: mvs(16),
      textAlign: 'center'
    }
  });
