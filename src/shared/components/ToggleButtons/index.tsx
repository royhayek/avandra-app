// Packages
import _ from 'lodash';
import React from 'react';
import { Text } from 'react-native-paper';
import { TouchableWithoutFeedback, View } from 'react-native';

// Utilities
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
interface Button {
  key: string;
  title: string;
}

interface ToggleButtonsProps {
  active: string;
  buttons: Button[];
  setActive: (key: string) => void;
}

// Component
const ToggleButtons: React.FC<ToggleButtonsProps> = ({ buttons, active, setActive }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  // Renderers
  return (
    <View style={styles.container}>
      {_.map(buttons, (button, index) => {
        const isActive = _.isEqual(button.key, active);
        return (
          <TouchableWithoutFeedback key={button.key} onPress={() => setActive(button.key)}>
            <View style={index === 0 ? styles.buttonContainer : styles.activeButtonContainer}>
              <View style={isActive ? styles.activeButton : styles.button}>
                <Text variant="bodySmall" style={styles.title}>
                  {button.title}
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
};

export default ToggleButtons;
