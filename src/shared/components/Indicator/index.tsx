// Packages
import _ from 'lodash';
import React from 'react';

// Components
import { Text } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { View, TouchableOpacity, TouchableOpacityProps } from 'react-native';

// Utilities
import makeStyles from './styles';

// Interfaces
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
interface IndicatorProps extends TouchableOpacityProps {
  index: number;
  length: number;
}

// Component
const Indicator: React.FC<IndicatorProps> = ({ index, length, ...props }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  // Renderers
  return (
    <View style={styles.container}>
      {_.times(length, (i) => {
        const isActive = _.isEqual(i, index);
        return <View key={i} style={isActive ? styles.activeDot : styles.dot} />;
      })}
    </View>
  );
};

Indicator.defaultProps = {
  index: 0,
  length: 3
};

export default Indicator;
