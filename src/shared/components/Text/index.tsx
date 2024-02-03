// Packages
import _ from 'lodash';
import React from 'react';

// Components
import { Text as RNPText, TextProps as RNPTextProps } from 'react-native-paper';

// Utilities
import makeStyles from './styles';

// Interfaces
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
type TextVariantsProps = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'xLarge' | 'large' | 'medium' | 'small' | 'xSmall';
interface TextProps extends RNPTextProps<string> {
  children: string;
  variant?: TextVariantsProps;
}

// Component
const Text: React.FC<TextProps> = ({ variant, children, style, ...props }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  // Renderers
  return (
    <RNPText variant={variant} style={[styles.text, style]} {...props}>
      {children}
    </RNPText>
  );
};

export default Text;
