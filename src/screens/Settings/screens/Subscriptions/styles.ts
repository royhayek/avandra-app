// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: mvs(24)
    },
    plansContainer: {
      paddingTop: ms(24),
      paddingBottom: mvs(24),
      paddingHorizontal: ms(24),
      borderTopEndRadius: ms(30),
      borderTopStartRadius: ms(30)
      // backgroundColor: theme.dark ? theme.colors.dark[2] : theme.colors.gray[50]
    },
    lottie: {
      width: ms(150),
      height: mvs(150),
      alignSelf: 'center'
    },
    noSubscriptionsText: {
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: mvs(10)
    },
    referText: {
      textAlign: 'center',
      marginBottom: mvs(15),
      marginHorizontal: ms(24),
      color: theme.colors.secondary
    },
    titleAndBenefits: {
      flex: 1,
      marginBottom: mvs(24),
      paddingHorizontal: ms(24)
    },
    benefits: {
      gap: mvs(8),
      marginTop: mvs(16)
      // borderRadius: ms(16),
      // backgroundColor: theme.dark ? theme.colors.dark[2] : theme.colors.gray[100]
    },
    benefit: {
      gap: ms(12),
      paddingEnd: ms(10),
      alignItems: 'center',
      flexDirection: 'row'
    },
    benefitText: {
      flex: 1,
      color: theme.dark ? theme.colors.white : theme.colors.gray[900],
      fontFamily: 'urbanist-semibold'
    },
    // Plans
    divider: {
      marginVertical: mvs(16)
    },
    currentPlan: {
      textAlign: 'center'
    },
    actions: {
      gap: ms(16),
      flexDirection: 'row'
    },
    title: {
      textAlign: 'center',
    },
    button: {
      flex: 1
    },
    terms: {
      marginTop: mvs(16)
    },
    link: {
      fontFamily: 'urbanist-semibold',
      textDecorationLine: 'underline'
    },
    acknowledgment: {
      marginVertical: mvs(16)
    }
  });
