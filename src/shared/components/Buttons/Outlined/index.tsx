// Packages
import React, { ReactNode } from 'react';
import { Text } from 'react-native-paper';
import { View, TouchableOpacity, ViewStyle } from 'react-native';

// Utilities
import makeStyles from './styles';

// Interfaces
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
interface OutlinedButtonProps {
  title?: string;
  style?: ViewStyle;
  disabled?: boolean;
  endIcon?: ReactNode;
  onPress?: () => void;
  startIcon?: ReactNode;
  containerStyle?: ViewStyle;
  backgroundColors?: string[];
}

// Component
const OutlinedButton: React.FC<OutlinedButtonProps> = ({
  title,
  onPress,
  endIcon,
  disabled,
  startIcon,
  containerStyle,
  ...props
}) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  // Renderers
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[disabled ? styles.disabledContainer : styles.container, containerStyle]}
      {...props}>
      <View style={styles.linearBackground}>
        {startIcon}
        <Text variant="titleMedium" style={styles.title}>
          {title}
        </Text>
        {endIcon && <View style={styles.endIcon}>{endIcon}</View>}
      </View>
    </TouchableOpacity>
  );
};

OutlinedButton.defaultProps = {
  title: 'Submit',
  onPress: () => null
};

export default OutlinedButton;
