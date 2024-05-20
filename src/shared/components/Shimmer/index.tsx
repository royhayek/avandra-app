// Packages
import _ from 'lodash';
import React from 'react';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';

// Components
import { LinearGradient } from 'expo-linear-gradient';

// Utilities
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
interface ShimmerProps {
  style?: any;
  width?: number;
  height?: number;
}

// Component
const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const Shimmer: React.FC<ShimmerProps> = ({ style, ...props }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  // Renderers
  return (
    <ShimmerPlaceholder
      style={[styles.shimmer, style]}
      shimmerColors={theme.dark ? ['#333333', '#444444', '#555555'] : undefined}
      {...props}
    />
  );
};

export default Shimmer;
