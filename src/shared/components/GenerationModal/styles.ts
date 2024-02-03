// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    modalContainer: {
      width: '70%',
      padding: ms(24),
      alignSelf: 'center',
      alignItems: 'center',
      borderRadius: ms(16),
      justifyContent: 'center',
      backgroundColor: theme.colors.background
    },
    generate_title: {
      marginTop: mvs(16)
    },
    generate_desc: {
      marginTop: mvs(16),
      textAlign: 'center'
    }
  });
