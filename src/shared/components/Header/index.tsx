// Packages
import _ from 'lodash';
import React from 'react';

// Components
import BackButton from '../Buttons/Back';
import { Text } from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import { View } from 'react-native';

// Utilities
import makeStyles from './styles';

// Interfaces
import { useAppTheme } from '@shared/assets/theme';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';

// Component
const Header: React.FC<NativeStackHeaderProps> = ({ options, navigation, route, back }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  // const leftIconComponent = leftIcon ? <TextInput.Icon icon={() => leftIcon} disabled /> : null;
  // const rightIconComponent = rightIcon ? <TextInput.Icon icon={() => rightIcon} disabled /> : null;

  // Renderers
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        {options?.title ? (
          <Text variant="h4" style={styles.appName}>
            {options?.title}
          </Text>
        ) : options?.headerTitle ? (
          <View style={styles.appName}>{options.headerTitle()}</View>
        ) : null}

        {back ? (
          <BackButton />
        ) : (
          <FastImage source={require('@shared/assets/icons/app-icon.png')} style={{ width: 28, height: 28 }} />
        )}

        {options?.headerRight && options?.headerRight()}
      </View>
    </SafeAreaView>
  );
};

export default Header;
