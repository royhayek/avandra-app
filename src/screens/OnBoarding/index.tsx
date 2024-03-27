// Packages
import _ from 'lodash';
import { useSelector } from 'react-redux';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Components
import { View } from 'react-native';
import Swiper from 'react-native-swiper';
import Text from '@shared/components/Text';
import FastImage from 'react-native-fast-image';
import Indicator from '@shared/components/Indicator';
import RegularButton from '@shared/components/Buttons/Regular';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { PUBLIC_URL } from '@shared/constants';
import { getWalkthrough } from '@redux/app/slice';
import makeCommonStyles from '@shared/assets/styles';

// Interfaces
import { useAppTheme } from '@shared/assets/theme';

// Component
const OnBoarding = () => {
  // Redux
  const walkthroughList = useSelector(getWalkthrough);

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const commonStyles = makeCommonStyles(theme);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const swiperRef = useRef<Swiper>(null);

  const [index, setIndex] = useState(0);

  // Callbacks
  const navigateToLogin = useCallback(async () => {
    await AsyncStorage.setItem('seenWalkthrough', 'true');
    navigation.navigate('Login');
  }, [navigation]);

  const checkIfSeenWalkthrough = useCallback(async () => {
    const seenWalkthrough = await AsyncStorage.getItem('seenWalkthrough');
    if (seenWalkthrough) navigateToLogin();
  }, [navigateToLogin]);

  const handleOnIndexChanged = useCallback((i: number) => setIndex(i), []);

  const handleBackOrSkipPress = useCallback(() => {
    if (index === 0) {
      navigateToLogin();
    } else {
      swiperRef.current?.scrollBy(-1, true);
    }
  }, [navigateToLogin, index]);

  const handleContinuePress = useCallback(() => {
    if (index === walkthroughList.length - 1) {
      navigateToLogin();
    } else {
      swiperRef.current?.scrollBy(1, true);
    }
  }, [navigateToLogin, index, walkthroughList.length]);

  // Effects
  useEffect(() => {
    checkIfSeenWalkthrough();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Renders
  return (
    <>
      <View style={styles.container}>
        <FastImage
          resizeMode="contain"
          style={styles.backgroundImg}
          source={{ uri: `${PUBLIC_URL}/walkthrough/image/${walkthroughList[index]?.image}` }}
        />
      </View>

      <View style={styles.bottomBackground}>
        <FastImage
          resizeMode="stretch"
          style={styles.contentImage}
          source={
            theme.dark
              ? require('@shared/assets/images/ArcBackgroundDark.png')
              : require('@shared/assets/images/ArcBackgroundLight.png')
          }
        />

        <View style={styles.content}>
          <Swiper ref={swiperRef} pagingEnabled showsPagination loop={false} onIndexChanged={handleOnIndexChanged}>
            {_.map(walkthroughList, ({ title, description }) => (
              <View key={title} style={{ flex: 1 }}>
                <Text variant="h3" style={styles.title}>
                  {title}
                </Text>
                <Text variant="xLarge" style={styles.description}>
                  {description}
                </Text>

                <Indicator index={index} length={walkthroughList?.length} style={styles.indicator} />

                <View style={commonStyles.footer}>
                  <RegularButton
                    variant="secondary"
                    style={styles.button}
                    onPress={handleBackOrSkipPress}
                    title={index > 0 ? t('common.back') : t('common.skip')}
                    backgroundColors={[theme.colors.lightGray, theme.colors.lightGray]}
                  />
                  <RegularButton
                    style={styles.button}
                    title={t('common.continue')}
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
