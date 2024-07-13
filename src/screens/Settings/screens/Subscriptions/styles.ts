// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs, s } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';
import i18n, { isRTL } from '@app/i18n';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: mvs(24)
    },
    plansContainer: {
      paddingBottom: mvs(12),
      paddingHorizontal: ms(24)
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
      fontFamily: 'urbanist-medium',
      color: theme.dark ? theme.colors.white : theme.colors.gray[900]
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
      textAlign: 'center'
    },
    button: {
      flex: 1
    },
    content: {
      direction: i18n.locale === 'ar' ? 'rtl' : 'ltr'
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
