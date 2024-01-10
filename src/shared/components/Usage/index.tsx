// Packages
import _ from 'lodash';
import { useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { ms } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import { increment, ref, update } from 'firebase/database';
import { RewardedAd, RewardedAdEventType } from 'react-native-google-mobile-ads';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

// Components
import LottieView from 'lottie-react-native';
import RegularButton from '../Buttons/Regular';
import { TouchableOpacity, View } from 'react-native';
import CustomBottomSheet from '@shared/components/BottomSheet';
import { IconButton, Text, useTheme } from 'react-native-paper';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { appName } from '@shared/utils';
import { FIREBASE_DB } from '../../../../firebaseConfig';
import { REWARDED_AD_UNIT_ID } from '@shared/constants';
import { getConfiguration, getDeviceUuid, getMessagesCount } from '@redux/app/slice';

// Interfaces
import { TranslateOptions } from 'i18n-js';
import { useAppTheme } from '@shared/assets/theme';

// Component
const _t = (key: string, options?: TranslateOptions) => t(`usage.${key}`, options);

const rewarded = RewardedAd.createForAdRequest(REWARDED_AD_UNIT_ID, {
  requestNonPersonalizedAdsOnly: true
});

// Interfaces

interface UsageProps {
  open?: boolean;
  onClose?: () => void;
}

const Usage: React.FC<UsageProps> = ({ open, onClose }) => {
  // Redux
  const messagesCount = useSelector(getMessagesCount);
  const deviceUuid = useSelector(getDeviceUuid);
  const config = useSelector(getConfiguration);
  const dailyMessagesLimit = config?.other?.dailyMessagesLimit;

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const bottomSheetRef = useRef();
  const navigation = useNavigation();

  const [loadedAd, setLoadedAd] = useState(false);

  const availableMsgsCount = useMemo(() => dailyMessagesLimit - messagesCount, [dailyMessagesLimit, messagesCount]);
  const snapPoints = useMemo(() => [availableMsgsCount > 0 ? '55%' : '58%'], [availableMsgsCount]);

  // Callbacks
  const handleOnPress = useCallback(() => bottomSheetRef.current.expand(), []);

  const handleSheetClose = useCallback(() => {
    _.isFunction(onClose) && onClose();
    bottomSheetRef.current?.close();
  }, [onClose]);

  const handleGetUnlimitedPress = useCallback(() => {
    handleSheetClose();
    navigation.navigate('Subscription');
  }, [handleSheetClose, navigation]);

  const handleEarnClick = useCallback(() => {
    rewarded.loaded && rewarded.show();
  }, []);

  // Effects
  useEffect(() => {
    open && bottomSheetRef.current && bottomSheetRef.current.expand();
  }, [open]);

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];

    const unsubscribeLoaded = rewarded.addAdEventListener(RewardedAdEventType.LOADED, async () => {
      setLoadedAd(true);
    });

    const unsubscribeEarned = rewarded.addAdEventListener(RewardedAdEventType.EARNED_REWARD, async (reward) => {
      const rewardedAmount = __DEV__ ? 1 : Number(reward.amount);
      const updates = {};
      updates[`users/${deviceUuid}/messagesCount`] = increment(-rewardedAmount);
      updates[`users/${deviceUuid}/lastRewardedDate`] = today;
      update(ref(FIREBASE_DB), updates);
      setLoadedAd(false);
      rewarded.load();
    });

    // Start loading the rewarded ad straight away
    rewarded.load();

    // Unsubscribe from events on unmount
    return () => {
      unsubscribeLoaded();
      unsubscribeEarned();
    };
  }, [deviceUuid]);

  useEffect(() => {
    if (!loadedAd) {
      const interval = setInterval(() => {
        rewarded.load();
      }, 10000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [loadedAd]);

  // Renderers
  const renderCloseIcon = useCallback(
    () => <Ionicons name="md-close" size={ms(25)} color={theme.dark ? theme.colors.white : theme.colors.black} />,
    [theme.colors.black, theme.colors.white, theme.dark]
  );

  return (
    <>
      <CustomBottomSheet sheetRef={bottomSheetRef} snapPoints={snapPoints} onClose={handleSheetClose}>
        <View style={styles.bottomSheetHeader}>
          <Text variant="titleMedium" style={styles.bottomSheetTitle}>
            {_t('daily_free_usage')}
          </Text>
          <IconButton size={ms(22)} rippleColor="transparent" style={styles.closeButton} onPress={handleSheetClose} icon={renderCloseIcon} />
        </View>
        <View style={styles.bottomSheetContent}>
          <View style={styles.freeMessagesTextBg}>
            <Text variant="labelMedium" style={styles.availableMsgs}>
              {availableMsgsCount > 0 ? _t('free_messages_daily', { name: appName, number: 5 }) : _t('hit_limit')}
            </Text>
          </View>
          <RegularButton title={_t('get_unlimited')} style={styles.upgradeButton} onPress={handleGetUnlimitedPress} />
          <RegularButton
            title={_t('earn')}
            style={styles.earnButton}
            onPress={handleEarnClick}
            backgroundColors={['#FF3F3F', '#FF2020', '#FF0000']}
            disabled={_.isEqual(availableMsgsCount, dailyMessagesLimit) || !loadedAd}
            startIcon={<LottieView autoSize autoPlay style={styles.playLottie} source={require('../../../../assets/play-video.json')} />}
          />
        </View>
      </CustomBottomSheet>
    </>
  );
};

Usage.defaultProps = {
  open: false,
  onClose: () => null
};

export default Usage;
