// Packages
import _ from 'lodash';
import { ms, s } from 'react-native-size-matters';
import React, { useCallback, useMemo, useRef } from 'react';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Components
import { Text } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import FastImage from 'react-native-fast-image';
import CustomBottomSheet from '@shared/components/BottomSheet';
import { Linking, Platform, ScrollView, TouchableOpacity, View } from 'react-native';
import NavigationButton, { NavigationButtonProps } from './components/NavigationButton';
import { EyeIcon, StarIcon, PaperIcon, LogoutIcon, PersonIcon, LoginIcon } from '@shared/assets/icons';

// Utilities
import makeStyles from './styles';
import i18n, { t } from '@app/i18n';
import { appName } from '@shared/utils';
import { authActions, selectIsGuest } from '@redux/auth/slice';
import { userActions } from '@redux/user/slice';
import { useAppTheme } from '@shared/assets/theme';
import { useAppDispatch, useAppSelector } from '@app/store';
import { appActions, selectConfiguration, selectSubscriptionState } from '@redux/app/slice';

// Interfaces
import { TranslateOptions } from 'i18n-js';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { itineraryActions } from '@redux/itinerary/slice';
import LoginSheet from '@shared/components/LoginSheet';
import Icon from '@shared/components/Icon';

// Component
const _t = (key: string, options?: TranslateOptions) => t(`settings.${key}`, options);

const SettingsScreen = () => {
  // Redux
  const dispatch = useAppDispatch();

  const isGuest = useAppSelector(selectIsGuest);
  const config = useAppSelector(selectConfiguration);
  const subscriptionState = useAppSelector(selectSubscriptionState);

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const logoutSheetRef = useRef<BottomSheetMethods>();
  const bottomSheetRef = useRef<BottomSheetMethods>();

  // Callbacks
  const handleLoginPress = () => dispatch(authActions.update({ authenticated: false, guest: false }));

  const handleLogoutPress = useCallback(() => logoutSheetRef.current?.expand(), []);

  const handleLogoutSheetClose = useCallback(() => logoutSheetRef.current?.close(), []);

  const navigateToAppearance = useCallback(() => navigation.navigate('Appearance'), [navigation]);

  const handleUpgradePress = useCallback(() => navigation.navigate('Subscriptions'), [navigation]);

  const navigateToPersonalInfo = useCallback(
    () => (isGuest ? bottomSheetRef.current?.expand() : navigation.navigate('PersonalInfo')),
    [isGuest, navigation]
  );

  const navigateToHelpAndSupport = useCallback(() => navigation.navigate('HelpSupport'), [navigation]);

  const handleRateApp = useCallback(() => {
    const appleAppId = config?.appleAppId;
    const androidPackageName = config?.googlePackageName;

    if (Platform.OS === 'android') {
      Linking.openURL(`market://details?id=${androidPackageName}&showAllReviews=true`);
    } else if (Platform.OS === 'ios') {
      Linking.openURL(`itms-apps://itunes.apple.com/app/viewContentsUserReviews/id${appleAppId}?action=write-review`);
    }
  }, [config?.appleAppId, config?.googlePackageName]);

  const navigateToSubscription = useCallback(
    () =>
      !subscriptionState?.active
        ? navigation.navigate('Subscriptions')
        : navigation.navigate('Billing', { title: _t('billing_and_subscriptions') }),
    [navigation, subscriptionState?.active]
  );

  const handleLogout = useCallback(() => {
    dispatch(authActions.reset());
    dispatch(userActions.reset());
    dispatch(appActions.resetSubscriptionState());
    dispatch(itineraryActions.reset());
  }, [dispatch]);

  // Renderer Vars
  const buttonIconColor = theme.dark ? theme.colors.white : theme.colors.gray[900];

  const buttons: NavigationButtonProps[] = useMemo(
    () => [
      {
        key: 'personal_info',
        name: _t('personal_info'),
        icon: <Icon name="profile" size={ms(22)} color={buttonIconColor} />,
        onPress: navigateToPersonalInfo
      },
      {
        key: 'manage_subscription',
        name: _t('billing_and_subscriptions'),
        icon: <Icon name="star" size={ms(22)} color={buttonIconColor} />,
        onPress: navigateToSubscription
      },
      {
        key: 'appearance',
        name: _t('app_appearance'),
        icon: <Icon name="show" size={ms(22)} color={buttonIconColor} />,
        onPress: navigateToAppearance
      },
      {
        key: 'help_and_support',
        name: _t('help_and_support'),
        icon: <Icon name="paper" size={ms(22)} color={buttonIconColor} />,
        onPress: navigateToHelpAndSupport
      },
      {
        key: 'rate',
        name: t('settings.rate_us'),
        icon: <Icon name="edit_square" size={ms(20)} color={buttonIconColor} />,
        onPress: handleRateApp
      },
      {
        key: 'logout',
        name: isGuest ? t('login.sign_in') : _t('logout'),
        icon: (
          <Icon
            size={ms(22)}
            name={isGuest ? 'login' : 'logout'}
            color={isGuest ? theme.colors.primary : theme.colors.red}
          />
        ),
        color: isGuest ? theme.colors.primary : theme.colors.red,
        onPress: isGuest ? handleLoginPress : handleLogoutPress
      }
    ],
    [
      isGuest,
      buttonIconColor,
      theme.colors.red,
      theme.colors.primary,
      handleRateApp,
      handleLoginPress,
      handleLogoutPress,
      navigateToAppearance,
      navigateToSubscription,
      navigateToPersonalInfo,
      navigateToHelpAndSupport
    ]
  );

  // Renderers
  const renderUpgradeButton = () => (
    <TouchableOpacity onPress={handleUpgradePress} style={styles.upgradeContainer}>
      <FastImage style={styles.upgradeIllustration} source={require('@shared/assets/images/UpgradeIllustration.png')} />
      <View style={styles.titleAndDesc}>
        <Text variant="h6" style={styles.upgradeTitle}>
          {_t('upgrade_to_plus')}
        </Text>
        <Text variant="small" style={styles.upgradeDesc}>
          {_t('expanded_access', { name: appName })}
        </Text>
      </View>
      <Ionicons
        color="white"
        size={ms(20)}
        name="chevron-forward-sharp"
        style={{ transform: i18n.locale === 'ar' ? [{ scaleX: -1 }] : undefined }}
      />
    </TouchableOpacity>
  );

  const renderContent = () => (
    <ScrollView
      overScrollMode="never"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}>
      {_.map(buttons, ({ key, icon, name, value, color, onPress, isSwitch, isMenu, switchProps, menuProps }) => (
        <NavigationButton
          key={key}
          icon={icon}
          name={name}
          color={color}
          value={value}
          isMenu={isMenu}
          onPress={onPress}
          isSwitch={isSwitch}
          menuProps={menuProps}
          switchProps={switchProps}
        />
      ))}
    </ScrollView>
  );

  const renderLogoutModal = () => (
    <CustomBottomSheet
      title={_t('logout')}
      sheetRef={logoutSheetRef}
      titleColor={theme.colors.red}
      onClose={handleLogoutSheetClose}
      primaryBtnProps={{ title: _t('yes_logout'), onPress: handleLogout }}
      secondaryBtnProps={{ title: t('common.cancel'), onPress: handleLogoutSheetClose }}>
      <Text variant="h5" style={{ textAlign: 'center' }}>
        {_t('logout_confirmation')}
      </Text>
    </CustomBottomSheet>
  );

  return (
    <View style={styles.container}>
      {!subscriptionState?.active && renderUpgradeButton()}
      {renderContent()}
      {renderLogoutModal()}

      <LoginSheet sheetRef={bottomSheetRef} />
    </View>
  );
};

export default SettingsScreen;
