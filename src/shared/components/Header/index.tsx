// Packages
import _ from 'lodash';
import React from 'react';
import { ms, mvs } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';

// Components
import { View } from 'react-native';
import BackButton from '../Buttons/Back';
import { Text } from 'react-native-paper';
import ShareButton from '../Buttons/Share';
import FastImage from 'react-native-fast-image';
import { SafeAreaView } from 'react-native-safe-area-context';

// Utilities
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
import { ShareDataProps } from '@shared/types/ShareDataProps';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

interface HeaderProps extends NativeStackHeaderProps {
  back: boolean;
  share: boolean;
  absolute?: boolean;
  shareData?: ShareDataProps;
}

// Component
const Header: React.FC<HeaderProps> = ({ options, route, back, share, absolute, shareData }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const navigation = useNavigation();

  // Callbacks
  const handleOnBackPress = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.reset({ index: 0, routes: [{ name: 'Home' }] });
    }
  };

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
          <BackButton onPressOut={handleOnBackPress} />
        ) : (
          <FastImage source={require('@shared/assets/icons/app-icon.png')} style={{ width: ms(28), height: mvs(28) }} />
        )}

        {options?.headerRight ? options?.headerRight() : share ? <ShareButton data={shareData} /> : null}
      </View>
    </SafeAreaView>
  );
};

export default Header;
