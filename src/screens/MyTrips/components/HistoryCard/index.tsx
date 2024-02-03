// Packages
import _ from 'lodash';
import { ms } from 'react-native-size-matters';
import React, { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, Feather, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

// Components
import Menu from '@shared/components/Menu';
import FastImage from 'react-native-fast-image';
import { IconButton, Text } from 'react-native-paper';
import { View, TouchableOpacity, ImageBackground } from 'react-native';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';
import { PARTNERS_LIST } from '../../../Planner/components/Step1/data';

// Interfaces
import { TranslateOptions } from 'i18n-js';
import GenerationModal from '@shared/components/GenerationModal';

interface HistoryCardProps {
  index: number;
  item: CardItem; // Assuming 'item' has a specific type. Replace 'CardItem' with the actual type.
  small?: boolean;
}

// Component
const _t = (key: string, options?: TranslateOptions) => t(`planner.step1.${key}`, options);

const HistoryCard: React.FC<HistoryCardProps> = ({ small, item, index }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const navigation = useNavigation();

  const [openOptionsMenu, setOpenOptionsMenu] = useState(false);
  const [regenerating, setRegenerating] = useState(false);

  const { cityImage, city, country, plannedDate, guest, duration } = item;

  const partner = _.find(PARTNERS_LIST, { key: guest.type });

  // Callbacks
  const toggleOptionsMenu = useCallback(() => setOpenOptionsMenu((cur) => !cur), []);

  const handleTextPress = useCallback(() => navigation.navigate('TripDetails'), [navigation]);

  const handleDeleteHistory = useCallback(async (id: number) => {
    // Call an endpoint to delete the trip in database
  }, []);

  const handleTripMenuItemPress = useCallback(
    (index: string) => {
      console.debug('Item Pressed', item);

      switch (index) {
        case '1':
          setRegenerating(true);
          console.debug('Regenerate Trip');

          setTimeout(() => {
            setRegenerating(false);
          }, 5000);

          break;
        case '2':
          console.debug('Share Trip');
          break;
        case '3':
          handleDeleteHistory(item?.id);
          break;
        default:
          break;
      }

      toggleOptionsMenu();
    },
    [handleDeleteHistory, item]
  );

  // Renderer Vars
  const menuItems = [
    {
      item: '1',
      title: 'trip.regenerate',
      leadingIcon: () => (
        <Ionicons name="refresh" size={ms(22)} color={theme.dark ? theme.colors.white : theme.colors.black} />
      )
    },
    {
      item: '2',
      title: 'trip.share',
      leadingIcon: () => (
        <Ionicons name="share-outline" size={ms(22)} color={theme.dark ? theme.colors.white : theme.colors.black} />
      )
    },
    {
      item: '3',
      title: 'trip.delete',
      leadingIcon: () => (
        <Ionicons name="trash-outline" size={ms(22)} color={theme.dark ? theme.colors.white : theme.colors.black} />
      )
    }
  ];

  // Renderers
  const renderDeleteIcon = useCallback(
    () => <Ionicons name="md-trash" size={ms(16)} color={theme.dark ? theme.colors.white : theme.colors.black} />,
    [theme.colors.black, theme.colors.white, theme.dark]
  );

  const renderMenuIcon = useCallback(
    () => <MaterialCommunityIcons name="dots-vertical" size={ms(18)} color={theme.colors.primary} />,
    [theme.colors.primary]
  );

  const renderTripInformation = () => (
    <View style={small ? styles.horizontalInfoContent : styles.verticalInfoContent}>
      <Text variant="h6" style={styles.title}>
        {country}, {city}
      </Text>

      <View style={styles.rowContainer}>
        <View style={styles.infoItemContainer}>
          <Text variant="medium" style={styles.assistant}>
            {_t(partner?.title)}
          </Text>
        </View>

        <Entypo name="dot-single" size={ms(20)} style={styles.dot} />

        <View style={styles.infoItemContainer}>
          <Feather
            name="calendar"
            size={ms(small ? ms(15) : ms(18))}
            color={theme.dark ? theme.colors.white : theme.colors.black}
          />
          <Text variant="medium" style={styles.date}>
            March 6th, 2023
          </Text>
        </View>
      </View>
    </View>
  );

  return small ? (
    <>
      <TouchableOpacity key={index} onPress={() => handleTextPress(item)} style={styles.verticalContainer}>
        <FastImage source={require('../../../../../assets/paris.jpeg')} style={styles.verticalImage} />

        {renderTripInformation()}

        <Menu
          items={menuItems}
          visible={openOptionsMenu}
          onDismiss={toggleOptionsMenu}
          onItemPress={handleTripMenuItemPress}
          anchor={
            <IconButton
              size={ms(20)}
              icon={renderMenuIcon}
              onPress={toggleOptionsMenu}
              style={{ borderRadius: ms(8) }}
            />
          }
        />
      </TouchableOpacity>
      <GenerationModal regenerating={regenerating} />
    </>
  ) : (
    <TouchableOpacity key={index} onPress={() => handleTextPress(item)} style={styles.container}>
      <ImageBackground
        resizeMode="stretch"
        style={styles.cityImage}
        imageStyle={{ borderRadius: ms(16) }}
        source={require('../../../../../assets/paris.jpeg')}>
        <IconButton
          size={ms(20)}
          mode="contained"
          icon={renderDeleteIcon}
          style={styles.deleteBtn}
          containerColor={theme.colors.background}
          onPress={() => handleDeleteHistory(item?.id)}
        />

        {renderTripInformation()}
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default HistoryCard;
