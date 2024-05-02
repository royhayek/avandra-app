// Packages
import _ from 'lodash';
import { useDispatch } from 'react-redux';
import React, { useCallback } from 'react';
import { ms } from 'react-native-size-matters';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Components
import { Divider, Text } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import FastImage from 'react-native-fast-image';
import { TouchableOpacity, View } from 'react-native';

// Utils
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';
import { plannerActions } from '@redux/planner/slice';

// Interfaces
interface SearchItemProps {
  item: any;
}

// Component
const SearchItem: React.FC<SearchItemProps> = ({ item }) => {
  // Redux
  const dispatch = useDispatch();

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  // Callbacks
  const handleItemPress = useCallback(() => {
    dispatch(plannerActions.setPayload({ destination: { name: item.name, country: item.country, image: item.image } }));
    navigation.navigate('Planner');
  }, [dispatch, item.name, item.country, item.image, navigation]);

  // Renders
  return (
    <TouchableOpacity onPress={handleItemPress}>
      {/* <FastImage source={{ uri: item?.image }} style={styles.image} /> */}
      <View style={styles.rowContainer}>
        <View style={styles.content}>
          <Text variant="h6">
            {item?.name}, {item?.country}
          </Text>
        </View>
        <Ionicons size={ms(18)} name="chevron-forward" style={styles.arrowIcon} color={theme.colors.secondary} />
      </View>

      <Divider style={styles.divider} />
    </TouchableOpacity>
  );
};

export default SearchItem;
