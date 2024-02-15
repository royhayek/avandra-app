// Packages
import _ from 'lodash';
import React from 'react';

// Components
import { View } from 'react-native';
import BackButton from '../Buttons/Back';
import { Text } from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import { SafeAreaView } from 'react-native-safe-area-context';

// Utilities
import makeStyles from './styles';
import ShareButton from '../Buttons/Share';
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { ms, mvs, s } from 'react-native-size-matters';

interface HeaderProps extends NativeStackHeaderProps {
  back: boolean;
  share: boolean;
  absolute?: boolean;
}

// Component
const Header: React.FC<HeaderProps> = ({ options, navigation, route, back, share, absolute }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  // Renderers
  return (
    <SafeAreaView style={[styles.safeAreaView, absolute && styles.absoluteView]}>
      <View style={styles.container}>
        {options?.title ? (
          <Text variant="h4" style={styles.appName}>
            {options?.title}
          </Text>
        ) : options?.headerTitle ? (
          <View style={styles.appName}>{options.headerTitle()}</View>
        ) : null}

        {back ? (
          <BackButton onPressOut={options?.onBackPress} />
        ) : (
          <FastImage source={require('@shared/assets/icons/app-icon.png')} style={{ width: ms(28), height: mvs(28) }} />
        )}

        {options?.headerRight ? options?.headerRight() : share ? <ShareButton /> : null}
      </View>
    </SafeAreaView>
  );
};

export default Header;
