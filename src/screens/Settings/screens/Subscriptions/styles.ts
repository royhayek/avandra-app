// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: mvs(16)
    },
    plansContainer: {
      paddingTop: ms(24),
      paddingBottom: mvs(16),
      paddingHorizontal: ms(24),
      borderTopEndRadius: ms(30),
      borderTopStartRadius: ms(30),
      backgroundColor: theme.dark ? theme.colors.dark[2] : theme.colors.gray[50]
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
    },
    benefit: {
      gap: ms(12),
      paddingEnd: ms(10),
      alignItems: 'center',
      flexDirection: 'row'
    },
    benefitText: {
      flex: 1,
      fontFamily: 'urbanist-medium'
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
    button: {
      flex: 1
    }
  });
