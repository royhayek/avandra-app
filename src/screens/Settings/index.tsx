// Packages
import _ from 'lodash';
import { ms } from 'react-native-size-matters';
import React, { useCallback, useMemo, useRef } from 'react';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Components
import { Text } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import FastImage from 'react-native-fast-image';
import CustomBottomSheet from '@shared/components/BottomSheet';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import NavigationButton, { NavigationButtonProps } from './components/NavigationButton';
import { EyeIcon, StarIcon, PaperIcon, LogoutIcon, PersonIcon, ShieldIcon } from '@shared/assets/icons';

// Utilities
import makeStyles from './styles';
import i18n, { t } from '@app/i18n';
import { appName } from '@shared/utils';
import { authActions } from '@redux/auth/slice';
import { userActions } from '@redux/user/slice';
import { useAppTheme } from '@shared/assets/theme';
import { getOwnedSubscription } from '@redux/app/slice';
import { useAppDispatch, useAppSelector } from '@app/store';

// Interfaces
import { TranslateOptions } from 'i18n-js';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

// Component
const _t = (key: string, options?: TranslateOptions) => t(`settings.${key}`, options);

const SettingsScreen = () => {
  // Redux
  const dispatch = useAppDispatch();

  const ownedSubscription = useAppSelector(getOwnedSubscription);

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const logoutSheetRef = useRef<BottomSheetMethods>();

  // Callbacks
  const handleLogoutPress = useCallback(() => logoutSheetRef.current?.expand(), []);
  
  const handleLogoutSheetClose = useCallback(() => logoutSheetRef.current?.close(), []);
  
  const navigateToAppearance = useCallback(() => navigation.navigate('Appearance'), [navigation]);
  
  const handleUpgradePress = useCallback(() => navigation.navigate('Subscriptions'), [navigation]);
  
  const navigateToPersonalInfo = useCallback(() => navigation.navigate('PersonalInfo'), [navigation]);

  const navigateToHelpAndSupport = useCallback(() => navigation.navigate('HelpSupport'), [navigation]);

  const navigateToAccountAndSecurity = useCallback(() => navigation.navigate('AccountSecurity'), [navigation]);
  
  const navigateToSubscription = useCallback(
    () => navigation.navigate('Billing', { title: _t('billing_and_subscriptions') }),
    [navigation]
  );

  const handleLogout = useCallback(() => {
    dispatch(authActions.reset());
    dispatch(userActions.reset());
  }, [dispatch]);

  // Renderer Vars
  const buttonIconColor = theme.dark ? theme.colors.white : theme.colors.gray[900];

  const buttons: NavigationButtonProps[] = useMemo(
    () => [
      {
        key: 'personal_info',
        name: _t('personal_info'),
        icon: <PersonIcon fill={buttonIconColor} />,
        onPress: navigateToPersonalInfo
      },
      {
        key: 'account_and_security',
        name: _t('account_and_security'),
        icon: <ShieldIcon fill={buttonIconColor} />,
        onPress: navigateToAccountAndSecurity
      },
      {
        key: 'manage_subscription',
        name: _t('billing_and_subscriptions'),
        icon: <StarIcon fill={buttonIconColor} />,
        onPress: navigateToSubscription
      },
      {
        key: 'appearance',
        name: _t('app_appearance'),
        icon: <EyeIcon fill={buttonIconColor} />,
        onPress: navigateToAppearance
      },
      {
        key: 'help_and_support',
        name: _t('help_and_support'),
        icon: <PaperIcon fill={buttonIconColor} />,
        onPress: navigateToHelpAndSupport
      },
      {
        key: 'logout',
        name: _t('logout'),
        icon: <LogoutIcon />,
        color: theme.colors.red,
        onPress: handleLogoutPress
      }
    ],
    [
      buttonIconColor,
      theme.colors.red,
      handleLogoutPress,
      navigateToAppearance,
      navigateToSubscription,
      navigateToPersonalInfo,
      navigateToHelpAndSupport,
      navigateToAccountAndSecurity
    ]
  );

  // Renderers
  const renderUpgradeButton = () => (
    <TouchableOpacity onPress={handleUpgradePress} style={styles.upgradeContainer}>
      <FastImage style={styles.upgradeIllustration} source={require('@shared/assets/images/UpgradeIllustration.png')} />
      <View>
        <Text variant="h6" style={styles.upgradeTitle}>
          {_t('upgrade_to_plus')}
        </Text>
        <Text variant="xSmall" style={styles.upgradeDesc}>
          {_t('expanded_access', { name: appName })}
        </Text>
      </View>
      <Ionicons
        color="white"
        size={ms(20)}
        name="ios-chevron-forward-sharp"
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
      {!ownedSubscription && renderUpgradeButton()}
      {renderContent()}
      {renderLogoutModal()}
    </View>
  );
};

export default SettingsScreen;
