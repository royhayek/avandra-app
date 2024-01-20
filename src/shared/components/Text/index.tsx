// Packages
import _ from 'lodash';
import React from 'react';
import { ms } from 'react-native-size-matters';

// Components
import { Text as RNPText, TextProps as RNPTextProps } from 'react-native-paper';

// Utilities
import makeStyles from './styles';

// Interfaces
import { useAppTheme } from '@shared/assets/theme';
import i18n from '@app/i18n';

// Interfaces
interface TextProps extends RNPTextProps<string> {
  children: string;
}

// Component
const Text: React.FC<TextProps> = ({ children, style, ...props }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  // Renderers
  return (
    <RNPText style={[styles.text, style]} {...props}>
      {children}
    </RNPText>
  );
};

export default Text;
