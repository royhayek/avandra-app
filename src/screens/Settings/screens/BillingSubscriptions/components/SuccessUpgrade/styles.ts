// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      // flex: 1,
      paddingVertical: mvs(16),
      paddingHorizontal: ms(24)
    },
    illutration: {
      width: ms(100),
      height: ms(100),
      alignSelf: 'center',
      marginTop: mvs(12),
      marginBottom: mvs(16)
    },
    title: {
      textAlign: 'center'
    },
    name: {
      textAlign: 'center'
    },
    benefitsTitle: {
      textAlign: 'center',
      marginBottom: mvs(16)
    },
    benefitsList: {
      gap: mvs(16)
    },
    benefit: {
      gap: ms(12),
      alignItems: 'center',
      paddingEnd: ms(20),
      flexDirection: 'row'
    },
    benefitText: {
      flex: 1,
      fontFamily: 'urbanist-medium',
      color: theme.dark ? theme.colors.white : theme.colors.gray[900]
    },
    divider: {
      marginVertical: mvs(16)
    },
    acknowledge: {
      textAlign: 'center',
      fontFamily: 'urbanist-medium'
    }
  });
