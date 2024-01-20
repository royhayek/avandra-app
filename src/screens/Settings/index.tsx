// Packages
import _ from 'lodash';
import { ms } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux';
import React, { useCallback, useMemo, useState } from 'react';
import { getAvailablePurchases } from 'react-native-iap';

// Components
import Menu from '@shared/components/Menu';
import Text from '@shared/components/Text';
import { Ionicons } from '@expo/vector-icons';
import { Avatar, Switch } from 'react-native-paper';
import Rate, { AndroidMarket } from 'react-native-rate';
import { Alert, ScrollView, TouchableOpacity, View } from 'react-native';

// Utilities
import makeStyles from './styles';
import { appName } from '@shared/utils';
import { Languages } from '@shared/constants';
import { changeLanguage, isRTL, t } from '@app/i18n';
import { getUser, userActions } from '@redux/user/slice';
import { useAppDispatch, useAppSelector } from '@app/store';
import { appActions, getConfiguration, getLanguage, getOwnedSubscription, getThemeMode } from '@redux/app/slice';

// Interfaces
import { TranslateOptions } from 'i18n-js';
import { authActions } from '@redux/auth/slice';
import { useAppTheme } from '@shared/assets/theme';

// Component
const _t = (key: string, options?: TranslateOptions) => t(`settings.${key}`, options);

const SettingsScreen = ({ navigation }) => {
  // Redux
  const dispatch = useAppDispatch();
  const updateOwnedSubscription = useCallback(
    (payload: string) => dispatch(appActions.setOwnedSubscription(payload)),
    [dispatch]
  );

  const user = useAppSelector(getUser);
  const language = useAppSelector(getLanguage);
  const themeMode = useAppSelector(getThemeMode);
  const config = useAppSelector(getConfiguration);
  const ownedSubscription = useAppSelector(getOwnedSubscription);

  console.debug('user', user);
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const [openLangMenu, setOpenLangMenu] = useState(false);

  const isDark = _.isEqual(themeMode, 'dark');

  // Callbacks
  const toggleLangMenu = useCallback(() => setOpenLangMenu((cur) => !cur), []);

  const navigateToInfo = useCallback(
    (type: string, options?: TranslateOptions) => {
      navigation.navigate('Info', { type, name: _t(type, options) });
    },
    [navigation]
  );

  const navigateToSubscription = useCallback(() => {
    navigation.navigate('Subscription');
  }, [navigation]);

  const updateLanguage = useCallback(
    (lng) => {
      dispatch(appActions.setLanguage(lng));
      changeLanguage(lng);
      toggleLangMenu();
    },
    [dispatch, toggleLangMenu]
  );

  const handleUpgradePress = useCallback(() => navigation.navigate('Subscription'), [navigation]);

  const handleRestorePurchase = useCallback(async () => {
    try {
      const purchases = await getAvailablePurchases();
      if (!_.isEmpty(purchases)) {
        console.debug('[handleRestorePurchase] :: ', { purchases });
        const lastPurchase = _.last(purchases);
        updateOwnedSubscription(lastPurchase?.productId);
        Alert.alert(_t('purchase_restored'));
      } else {
        Alert.alert(_t('could_not_restore'));
      }
    } catch (error) {
      console.error('[handleRestorePurchase] - ERROR :: ', error);
    }
  }, [updateOwnedSubscription]);

  const handleRateApp = useCallback(() => {
    const options = {
      AppleAppID: config?.other?.appleAppId,
      GooglePackageName: config?.other?.googlePackageName,
      preferredAndroidMarket: AndroidMarket.Google,
      preferInApp: true,
      openAppStoreIfInAppFails: true
    };
    Rate.rate(options, (success, errorMessage) => {
      if (success) {
        // This technically only tells us if the user successfully went to the Review Page. Whether they actually did anything, we do not know.
        console.debug('User successfully rated the app');
      }
      if (errorMessage) {
        // errorMessage comes from the native code. Useful for debugging, but probably not for users to view
        console.error(`Example page Rate.rate() error: ${errorMessage}`);
      }
    });
  }, [config?.other?.appleAppId, config?.other?.googlePackageName]);

  const handleLogout = useCallback(() => {
    dispatch(authActions.reset());
    dispatch(userActions.reset());
  }, []);

  const toggleThemeMode = useCallback(
    () => dispatch(appActions.setThemeMode(isDark ? 'light' : 'dark')),
    [dispatch, isDark]
  );

  // Renderer Vars
  const sections = useMemo(
    () => [
      {
        section: _t('general'),
        items: [
          {
            key: 'language',
            name: _t('language'),
            icon: 'ios-language-outline',
            value: _.find(Languages, { item: language })?.title,
            onPress: () => toggleLangMenu(),
            isMenu: true
          },
          {
            key: 'theme',
            name: _t('theme'),
            icon: 'ios-sunny-outline',
            value: isDark,
            onPress: toggleThemeMode,
            isSwitch: true
          }
        ]
      },
      {
        section: _t('subscription'),
        items: [
          {
            key: 'restore_purchase',
            name: _t('restore_purchase'),
            icon: 'ios-cart-outline',
            onPress: handleRestorePurchase
          },
          {
            key: 'manage_subscription',
            name: _t('manage_subscription'),
            icon: 'ios-today-outline',
            onPress: navigateToSubscription
          }
        ]
      },
      {
        section: _t('other'),
        items: [
          // {
          //   key: 'faq',
          //   name: _t('faq'),
          //   icon: 'ios-help-circle-outline',
          //   onPress: () => navigateToInfo('faq'),
          // },
          {
            key: 'privacy_policy',
            name: t('common.privacy_policy'),
            icon: 'ios-document-text-outline',
            onPress: () => navigateToInfo('privacy_policy')
          },
          {
            key: 'terms',
            name: t('common.terms'),
            icon: 'ios-information-circle-outline',
            onPress: () => navigateToInfo('terms', { name: appName })
          },
          {
            key: 'rate',
            name: _t('rate_app'),
            icon: 'ios-star-outline',
            onPress: () => handleRateApp()
          },
          {
            key: 'logout',
            name: _t('logout'),
            icon: 'ios-exit-outline',
            onPress: () => handleLogout()
          }
        ]
      }
    ],
    [
      handleRateApp,
      handleRestorePurchase,
      isDark,
      language,
      navigateToInfo,
      navigateToSubscription,
      toggleLangMenu,
      toggleThemeMode
    ]
  );

  // Renderers
  const renderUpgradeButton = useMemo(
    () => (
      <TouchableOpacity onPress={handleUpgradePress} style={styles.upgradeContainer}>
        <View>
          <Text variant="titleLarge" style={styles.upgradeTitle}>
            {_t('upgrade_to_plus')}
          </Text>
          <Text variant="labelSmall" style={styles.upgradeDesc}>
            {_t('expanded_access', { name: appName })}
          </Text>
        </View>
        <Ionicons
          name="ios-chevron-forward-sharp"
          size={ms(28)}
          color="white"
          style={{ transform: isRTL ? [{ scaleX: -1 }] : undefined }}
        />
      </TouchableOpacity>
    ),
    [handleUpgradePress, styles.upgradeContainer, styles.upgradeDesc, styles.upgradeTitle]
  );

  const renderContent = useMemo(
    () => (
      <>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, margin: ms(16) }}>
          <Avatar.Image size={40} source={{ uri: user?.photo }} />
          <Text variant="titleSmall">{user?.name}</Text>
        </View>
        <ScrollView
          overScrollMode="never"
          style={styles.content}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}>
          {_.map(sections, ({ section, items }) => (
            <View key={section}>
              <Text variant="labelMedium" style={styles.title}>
                {section}
              </Text>
              {_.map(items, ({ key, icon, name, value, onPress, isSwitch, isMenu }) => (
                <TouchableOpacity key={key} style={styles.item} onPress={onPress}>
                  <View style={styles.iconAndTitle}>
                    <View style={styles.iconContainer}>
                      <Ionicons name={icon} size={ms(24)} style={styles.endIcon} />
                    </View>
                    <Text variant="labelLarge">{name}</Text>
                  </View>
                  {isSwitch ? (
                    <Switch
                      value={value}
                      onValueChange={onPress}
                      style={{ transform: [{ scaleX: ms(0.8) }, { scaleY: ms(0.8) }] }}
                    />
                  ) : isMenu ? (
                    <Menu
                      items={Languages}
                      visible={openLangMenu}
                      onDismiss={toggleLangMenu}
                      onItemPress={updateLanguage}
                      anchor={
                        <View style={styles.anchor}>
                          <Text variant="bodySmall">{value}</Text>
                          <Ionicons
                            size={ms(18)}
                            name="chevron-forward"
                            style={styles.arrowIcon}
                            color={theme.dark ? theme.colors.secondary : theme.colors.black}
                          />
                        </View>
                      }
                    />
                  ) : (
                    <Ionicons
                      size={ms(18)}
                      name="chevron-forward"
                      style={styles.arrowIcon}
                      color={theme.dark ? theme.colors.secondary : theme.colors.black}
                    />
                  )}
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </ScrollView>
      </>
    ),
    [styles, sections, theme, openLangMenu, updateLanguage, toggleLangMenu]
  );

  return (
    <View style={styles.container}>
      {!ownedSubscription && renderUpgradeButton}
      {renderContent}
    </View>
  );
};

export default SettingsScreen;
