// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme, isSelected: boolean) =>
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
    plan: {
      padding: ms(10),
      flexDirection: 'row',
      marginBottom: mvs(16),
      borderRadius: theme.roundness,
      borderWidth: isSelected ? 2 : 1,
      backgroundColor: theme.dark ? theme.colors.dark[3] : theme.colors.gray[100],
      borderColor: isSelected ? theme.colors.primary : theme.dark ? theme.colors.dark[5] : theme.colors.gray[400]
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
    price: {},
    name: {
      color: theme.colors.secondary,
      fontFamily: 'urbanist-medium'
    },
    divider: {
      height: 1,
      width: '100%',
      marginVertical: mvs(16)
    },
    currentPlan: {
      textAlign: 'center'
    },
    actions: {
      gap: ms(16),
      flexDirection: 'row'
    },
    checkboxIconStyle: {
      borderWidth: isSelected ? 0 : 1,
      borderColor: theme.dark ? theme.colors.dark[5] : theme.colors.gray[400]
    },
    button: {
      flex: 1
    },
    // Shimmer
    shimmerPlan: {
      justifyContent: 'center'
    },
    shimmerName: {
      alignSelf: 'center'
    },
    shimmerPrice: {
      alignSelf: 'center',
      marginTop: mvs(16)
    },
    shimmerBenefitRow: {
      gap: 10,
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: mvs(8)
    },
    shimmerBenefit: {
      marginVertical: mvs(4)
    }
  });
