// Packages
import _ from 'lodash';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useRef, useState } from 'react';

// Components
import { View } from 'react-native';
import Swiper from 'react-native-swiper';
import Text from '@shared/components/Text';
import FastImage from 'react-native-fast-image';
import Indicator from '@shared/components/Indicator';
import RegularButton from '@shared/components/Buttons/Regular';

// Utils
import { t } from '@app/i18n';
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

  const swiperRef = useRef<Swiper>(null);

  const [index, setIndex] = useState(0);

  const onBoardingData = data(t);

  // Callbacks
  const handleOnIndexChanged = useCallback((i: number) => setIndex(i), []);

  const handleBackOrSkipPress = useCallback(() => {
    if (index === 0) {
      navigation.navigate('Login');
    } else {
      swiperRef.current?.scrollBy(-1, true);
    }
  }, [index, navigation]);

  const handleContinuePress = useCallback(() => {
    if (index === onBoardingData.length - 1) {
      navigation.navigate('Login');
    } else {
      swiperRef.current?.scrollBy(1, true);
    }
  }, [index, navigation, onBoardingData.length]);

  // Renders
  return (
    <>
      <View style={styles.container}>
        <FastImage resizeMode="contain" source={onBoardingData[index].background} style={styles.backgroundImg} />
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
            {_.map(onBoardingData, ({ title, description }) => (
              <View key={title} style={{ flex: 1 }}>
                <Text variant="h3" style={styles.title}>
                  {title}
                </Text>
                <Text variant="xLarge" style={styles.description}>
                  {description}
                </Text>

                <Indicator index={index} length={onBoardingData?.length} style={styles.indicator} />

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
