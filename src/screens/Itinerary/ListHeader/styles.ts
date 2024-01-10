// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Types
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    noteAndTips: {
      marginBottom: mvs(5),
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    aiPoweredContainer: {
      borderRadius: ms(30),
      marginBottom: mvs(6),
      paddingVertical: mvs(6),
      alignSelf: 'flex-start',
      paddingHorizontal: ms(10),
      borderWidth: theme.dark ? 1 : 0,
      backgroundColor: theme.dark ? 'transparent' : theme.colors.card,
      borderColor: theme.dark ? theme.colors.secondary : 'transparent'
    },
    interestsWrapper: {
      gap: ms(8),
      marginTop: ms(8),
      flexWrap: 'wrap',
      flexDirection: 'row'
    },
    interests: {
      borderWidth: ms(0.5),
      borderRadius: ms(30),
      paddingVertical: mvs(3),
      paddingHorizontal: ms(5),
      backgroundColor: 'transparent',
      borderColor: theme.colors.primary
    },
    destinationInfo: {
      marginVertical: mvs(16)
    },
    itineraryTitle: {
      marginTop: mvs(8),
      marginBottom: mvs(16)
    }
  });
