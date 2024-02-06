// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    // Empty Layout
    emptyContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
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
      color: theme.colors.secondary
    },
    // Plans
    plansList: {
      paddingVertical: mvs(16),
      paddingHorizontal: ms(24)
    },
    plan: {
      borderWidth: 1,
      padding: ms(24),
      marginBottom: mvs(24),
      borderRadius: theme.roundness,
      borderColor: theme.dark ? theme.colors.dark[5] : theme.colors.gray[400],
      backgroundColor: theme.dark ? theme.colors.dark[3] : theme.colors.gray[100]
    },
    badge: {
      end: 0,
      top: 0,
      paddingVertical: 4,
      position: 'absolute',
      paddingHorizontal: 10,
      backgroundColor: theme.colors.primary,
      borderEndStartRadius: theme.roundness,
      borderTopEndRadius: theme.roundness - 2
    },
    badgeText: {
      color: theme.colors.white
    },
    name: {
      textAlign: 'center'
    },
    price: {
      textAlign: 'center'
    },
    benefits: {
      gap: mvs(16)
    },
    benefit: {
      gap: ms(12),
      alignItems: 'center',
      paddingEnd: ms(10),
      flexDirection: 'row'
    },
    benefitText: {
      flex: 1,
      fontFamily: 'urbanist-medium'
    },
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
