// Packages
import _ from 'lodash';
import React from 'react';

// Components
import { View } from 'react-native';
import { Text } from 'react-native-paper';

// Utilities
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
interface StepHeaderProps {
  title: string;
  description: string;
}

// Component
const StepHeader: React.FC<StepHeaderProps> = ({ title, description }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  // Renderers
  return (
    <View>
      <Text variant="h3" style={styles.title}>
        {title}
      </Text>
      <Text variant="xLarge">{description}</Text>
    </View>
  );
};

export default StepHeader;
