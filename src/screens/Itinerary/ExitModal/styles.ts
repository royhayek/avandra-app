import { ms, mvs } from 'react-native-size-matters';
import { scaledFontSize } from '../../../shared/assets/theme';
import { StyleSheet } from 'react-native';

export default theme =>
  StyleSheet.create({
    content: {
      width: '95%',
      alignItems: 'center',
      borderRadius: ms(10),
      paddingVertical: mvs(20),
      marginHorizontal: ms(10),
      paddingHorizontal: ms(15),
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    title: {
      fontWeight: 'bold',
      textAlign: 'center',
      color: theme.colors.black,
      fontSize: scaledFontSize(18),
    },
    description: {
      marginTop: mvs(10),
      textAlign: 'center',
      marginBottom: mvs(25),
      color: theme.colors.gray,
      fontSize: scaledFontSize(16),
    },
    buttonsContainer: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'space-between',
      justifyContent: 'space-between',
    },
    gobackButton: {
      fontWeight: 'bold',
      borderRadius: ms(30),
      backgroundColor: theme.colors.black,
    },
    closeButton: {
      alignSelf: 'flex-end',
      marginBottom: mvs(10),
    },
  });
