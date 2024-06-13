// Packages
import { Dimensions, StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

const windowWidth = Dimensions.get('window').width;

export default (theme: AppTheme) =>
  StyleSheet.create({
    scrollView: {
      flex: 1
    },
    curvedContainer: {
      overflow: 'hidden',
      alignSelf: 'center',
      width: windowWidth,
      height: windowWidth / 1.15,
      backgroundColor: theme.colors.gray[200]
    },
    shareButton: {
      top: 40,
      end: 50,
      position: 'absolute',
      backgroundColor: theme.colors.background
    },
    image: {
      width: windowWidth,
      height: windowWidth
    },
    content: {
      flex: 1,
      borderRadius: 40,
      paddingTop: mvs(16),
      paddingBottom: mvs(50)
    },
    paddedContent: {
      paddingHorizontal: ms(24)
    },
    countryContainer: {
      gap: ms(10),
      alignItems: 'center',
      flexDirection: 'row'
    },
    country: {
      fontFamily: 'urbanist-medium',
      color: theme.dark ? theme.colors.gray[200] : theme.colors.gray[700]
    },
    payload: {
      marginTop: mvs(4),
      marginBottom: mvs(12),
      fontFamily: 'urbanist-medium',
      color: theme.dark ? theme.colors.white : theme.colors.gray[700]
    },
    title: {
      marginBottom: mvs(4),
      color: theme.dark ? theme.colors.white : theme.colors.gray[900]
    },
    mapContainer: {
      marginTop: mvs(16),
      overflow: 'hidden',
      borderRadius: theme.roundness
    },
    map: {
      width: '100%',
      height: mvs(180)
    },
    disabledMapView: {
      ...StyleSheet.absoluteFillObject,
      flex: 1,
      justifyContent: 'center'
    },
    disabledMapOverlay: {
      flex: 1,
      opacity: 0.5,
      backgroundColor: theme.colors.gray[700]
    },
    disabledMapContent: {
      flex: 1,
      top: 24,
      left: 24,
      right: 24,
      bottom: 24,
      position: 'absolute'
    },
    illutration: {
      width: ms(48),
      height: ms(48),
      alignSelf: 'center',
      marginTop: mvs(12),
      marginBottom: mvs(16)
    },
    upgradeText: {
      textAlign: 'center',
      color: theme.colors.white,
      fontFamily: 'urbanist-bold'
    },
    fab: {
      opacity: 0.9,
      right: ms(24),
      bottom: mvs(30),
      position: 'absolute',
      borderRadius: ms(100),
      backgroundColor: theme.colors.primary
    },
    row: {
      gap: ms(5),
      flexDirection: 'row',
      alignItems: 'center'
    },
    tipsContent: {
      marginBottom: mvs(8)
    },
    tipRow: {
      gap: ms(10),
      flexDirection: 'row',
      alignItems: 'flex-start'
    },
    tipIcon: {
      marginTop: mvs(5)
    },
    // Shimmer
    shimmerBody: {
      padding: ms(24)
    },
    shimmerTitle: {
      width: ms(200),
      height: mvs(30)
    },
    shimmerDate: {
      width: ms(250),
      height: mvs(20),
      marginTop: mvs(8)
    },
    shimmerSubtitle: {
      width: ms(110),
      height: mvs(25),
      marginTop: mvs(24)
    },
    shimmerOverview: {
      width: '100%',
      height: mvs(150),
      marginTop: mvs(16)
    },
    shimmerTipsView: {
      marginTop: mvs(16),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    shimmerTipsTitle: {
      width: ms(90),
      height: mvs(25)
    },
    shimmerTipsBtn: {
      width: ms(50),
      height: mvs(25)
    }
  });
