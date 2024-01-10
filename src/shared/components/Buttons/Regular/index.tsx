// Packages
import React from 'react';
// Components
import { Text } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { View, TouchableOpacity, TouchableOpacityProps, ViewStyle, StyleProp } from 'react-native';
// Utilities
import makeStyles from './styles';
// Interfaces
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
interface RegularButtonProps extends TouchableOpacityProps {
  title?: string;
  disabled?: boolean;
  onPress?: () => void;
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  backgroundColors?: string[];
  style?: StyleProp<ViewStyle>;
}

// Component
const RegularButton: React.FC<RegularButtonProps> = ({ title, onPress, style, startIcon, endIcon, backgroundColors, disabled, ...props }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  // Renderers
  return (
    <TouchableOpacity onPress={onPress} style={[disabled ? styles.disabledContainer : styles.container, style]} disabled={disabled} {...props}>
      <LinearGradient
        start={{ x: 0, y: 0.75 }}
        end={{ x: 1, y: 0.25 }}
        colors={backgroundColors ?? [theme.colors.primary, theme.colors.primary, theme.colors.darkBlue]}
        style={[styles.linearBackground, style]}>
        {startIcon}
        <Text variant="titleMedium" style={styles.title}>
          {title}
        </Text>
        {endIcon && <View style={styles.endIcon}>{endIcon}</View>}
      </LinearGradient>
    </TouchableOpacity>
  );
};

RegularButton.defaultProps = {
  title: 'Submit',
  onPress: () => null
};

export default RegularButton;
