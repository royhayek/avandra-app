// Packages
import _ from 'lodash';
import React from 'react';
import { ms } from 'react-native-size-matters';

// Components
import FastImage from 'react-native-fast-image';
import { IconButton, Text } from 'react-native-paper';
import { TouchableOpacity, View } from 'react-native';
import { CircleAddDarkIcon, CircleAddLightIcon, CircleCheckIcon } from '@shared/assets/icons';

// Utils
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
interface EventAdditionItemProps {
  item: any;
  selected: boolean;
  onAddPress: (item: any) => void;
}

// Component
const EventAdditionItem: React.FC<EventAdditionItemProps> = ({ item, onAddPress, selected }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  // Callbacks

  // Renderer vars
  const iconProps = {
    fill: theme.dark ? theme.colors.white : theme.colors.gray[900]
  };

  // Renders
  return (
    <TouchableOpacity style={styles.rowContainer}>
      <FastImage source={{ uri: item?.image }} style={styles.image} />

      <View style={styles.content}>
        <Text variant="h6">{item?.name}</Text>
        <Text variant="medium" style={styles.type}>
          {item?.type}
        </Text>
      </View>

      <IconButton
        size={ms(18)}
        onPress={() => onAddPress(item)}
        icon={() =>
          selected ? (
            <CircleCheckIcon />
          ) : theme.dark ? (
            <CircleAddDarkIcon {...iconProps} />
          ) : (
            <CircleAddLightIcon {...iconProps} />
          )
        }
      />
    </TouchableOpacity>
  );
};

export default EventAdditionItem;
