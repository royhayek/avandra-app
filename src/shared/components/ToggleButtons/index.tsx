// Packages
import _ from 'lodash';
import React from 'react';

// Components
import { Text } from 'react-native-paper';
import { StyleProp, TouchableWithoutFeedback, View, ViewStyle } from 'react-native';

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
  containerStyle: StyleProp<ViewStyle>;
}

// Component
const ToggleButtons: React.FC<ToggleButtonsProps> = ({ buttons, active, setActive, containerStyle }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  // Callbacks
  const handleButtonPress = () => setActive(button.key);

  // Renderers
  return (
    <View style={[styles.container, containerStyle]}>
      {_.map(buttons, (button, index) => {
        const isActive = _.isEqual(button.key, active);

        return (
          <TouchableWithoutFeedback key={button.key} onPress={handleButtonPress}>
            <View style={index === 0 ? styles.buttonContainer : styles.activeButtonContainer}>
              <View style={isActive ? styles.activeButton : styles.button}>
                <Text variant="medium" style={[styles.title, isActive && styles.activeTitle]}>
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
