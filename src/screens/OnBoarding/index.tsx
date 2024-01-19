// Packages
import _ from 'lodash';
import * as Device from 'expo-device';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useRef, useState } from 'react';

// Components
import { View } from 'react-native';
import Swiper from 'react-native-swiper';
import { Text } from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import Indicator from '@shared/components/Indicator';
import RegularButton from '@shared/components/Buttons/Regular';

// Utils
import { data } from './data';
import makeStyles from './styles';
import makeCommonStyles from '@shared/assets/styles';

// Interfaces
import { useAppTheme } from '@shared/assets/theme';

// Component
const OnBoarding = () => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const commonStyles = makeCommonStyles(theme);

  const navigation = useNavigation();

  const swiperRef = useRef();

  const [index, setIndex] = useState(0);

  // Callbacks
  const handleOnIndexChanged = useCallback((i: number) => setIndex(i), []);

  const handleBackOrSkipPress = useCallback(() => {
    if (index === 0) {
      navigation.navigate('Login');
    } else {
      swiperRef.current.scrollBy(-1, true);
    }
  }, [index]);

  const handleContinuePress = useCallback(() => {
    if (index === data.length - 1) {
      navigation.navigate('Login');
    } else {
      swiperRef.current.scrollBy(1, true);
    }
  }, [index]);

  // Renders
  return (
    <>
      <View style={styles.container}>
        <FastImage resizeMode="contain" source={data[index].background} style={styles.backgroundImg} />
      </View>

      <View style={styles.bottomBackground}>
        <FastImage
          resizeMode="stretch"
          source={
            theme.dark
              ? require('@shared/assets/images/ArcBackgroundDark.png')
              : require('@shared/assets/images/ArcBackgroundLight.png')
          }
          style={styles.contentImage}
        />

        <View style={styles.content}>
          <Swiper ref={swiperRef} pagingEnabled showsPagination loop={false} onIndexChanged={handleOnIndexChanged}>
            {_.map(data, ({ title, description }) => (
              <View key={title} style={{ flex: 1 }}>
                <Text variant="h3" style={styles.title}>
                  {title}
                </Text>
                <Text variant="xLarge" style={styles.description}>
                  {description}
                </Text>

                <Indicator index={index} length={data?.length} />

                <View style={commonStyles.footer}>
                  <RegularButton
                    variant="secondary"
                    style={styles.button}
                    onPress={handleBackOrSkipPress}
                    title={index > 0 ? 'Back' : 'Skip'}
                    backgroundColors={[theme.colors.lightGray, theme.colors.lightGray]}
                  />
                  <RegularButton
                    title="Continue"
                    style={styles.button}
                    onPress={handleContinuePress}
                    backgroundColors={[theme.colors.primary, theme.colors.primary]}
                  />
                </View>
              </View>
            ))}
          </Swiper>
        </View>
      </View>
    </>
  );
};

export default OnBoarding;
