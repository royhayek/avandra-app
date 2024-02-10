// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    scrollView: {
      flex: 1
    },
    rowContent: {
      flexDirection: 'row',
      marginBottom: mvs(24)
    },
    typeLine: {
      marginEnd: ms(16),
      alignItems: 'center'
    },
    verticalLine: {
      flex: 1,
      width: ms(1),
      height: '100%',
      marginTop: mvs(16),
      backgroundColor: theme.dark ? theme.colors.dark[5] : theme.colors.gray[200]
    },
    itineraryContent: {
      flex: 1,
      width: '100%',
      borderRadius: theme.roundness,
      backgroundColor: theme.dark ? theme.colors.dark[3] : theme.colors.gray[100]
    },
    itineraryImage: {
      height: mvs(180),
      borderTopLeftRadius: theme.roundness,
      borderTopRightRadius: theme.roundness
    },
    itineraryDetails: {
      borderTopWidth: 0,
      borderWidth: ms(1),
      paddingTop: mvs(16),
      paddingBottom: mvs(8),
      paddingHorizontal: ms(16),
      borderEndEndRadius: theme.roundness,
      borderEndStartRadius: theme.roundness,
      borderColor: theme.dark ? theme.colors.dark[5] : theme.colors.gray[200]
    },
    ratingContainer: {
      gap: ms(4),
      marginTop: mvs(4),
      flexDirection: 'row',
      alignItems: 'center'
    },
    ratingText: {
      color: theme.dark ? theme.colors.gray[200] : theme.colors.gray[700]
    },
    divider: {
      marginVertical: mvs(8)
    },
    mediumText: {
      fontFamily: 'urbanist-medium'
    },
    paddedContent: {
      flex: 1,
      paddingHorizontal: ms(24)
    },
    navigationIcon: {
      marginEnd: ms(16),
      justifyContent: 'center'
    },
    itineraryNavigation: {
      flex: 1,
      width: '100%',
      padding: ms(16),
      borderWidth: ms(1),
      flexDirection: 'row',
      borderRadius: theme.roundness,
      borderColor: theme.dark ? theme.colors.dark[5] : theme.colors.gray[200],
      backgroundColor: theme.dark ? theme.colors.dark[3] : theme.colors.gray[100]
    },
    infoRow: {
      gap: ms(10),
      marginBottom: mvs(8),
      alignItems: 'center',
      flexDirection: 'row'
    },
    navigation: {
      flex: 1,
      gap: mvs(4),
      alignItems: 'center'
    },
    navigationTitle: {
      fontFamily: 'urbanist-medium'
    },
    dateTabs: {
      marginVertical: mvs(24)
    }
  });
