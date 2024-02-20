// Packages
import { StyleSheet } from 'react-native';
import { mvs } from 'react-native-size-matters';

export default () =>
  StyleSheet.create({
    option: {
      paddingVertical: 16
    },
    contentStyle: {
      marginTop: 0,
      marginBottom: mvs(8)
    }
  });
