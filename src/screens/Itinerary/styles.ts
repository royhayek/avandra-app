// Packages
import { StyleSheet, ViewStyle } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background
    },
    body: {
      flex: 1,
      shadowOpacity: 1,
      shadowRadius: 20,
      shadowColor: theme.colors.background,
      shadowOffset: { width: 0, height: 0 },
      backgroundColor: theme.colors.background
    },
    flatList: {
      flex: 1,
      padding: ms(20)
    },
    listContentContainer: { paddingBottom: mvs(100) },
    mapContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.background
    },
    map: {
      width: '100%',
      height: mvs(200)
    },
    mapMarkerWrapper: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    mapMarkerImg: {
      width: ms(25),
      height: mvs(25),
      backgroundColor: 'transparent'
    },
    mapMarkerValue: {
      fontWeight: 'bold',
      position: 'absolute',
      color: theme.colors.white
    },
    backBtn: {
      left: ms(16),
      top: mvs(50),
      position: 'absolute',
      color: theme.colors.white
    },
    headerButtons: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: 'center'
    },
    mapViewBtn: {
      paddingTop: mvs(24),
      alignSelf: 'center',
      position: 'absolute',
      paddingHorizontal: ms(10)
    },
    activity: {
      elevation: 2,
      borderWidth: 1,
      borderRadius: ms(8),
      flexDirection: 'row',
      marginBottom: mvs(10),
      paddingVertical: mvs(8),
      marginHorizontal: ms(3),
      paddingHorizontal: ms(8),
      borderColor: theme.dark ? theme.colors.white : 'transparent',
      backgroundColor: theme.dark ? 'transparent' : theme.colors.card
    },
    imageContainer: {
      paddingEnd: ms(16),
      justifyContent: 'center'
    },
    image: {
      width: ms(90),
      height: mvs(90),
      borderRadius: ms(8),
      backgroundColor: theme.colors.background
    },
    descriptionContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-around'
    }
  });
