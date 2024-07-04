// Packages
import _ from 'lodash';
import { useDispatch } from 'react-redux';
import React, { RefObject, useCallback } from 'react';
import { ms } from 'react-native-size-matters';
import { ParamListBase, useNavigation } from '@react-navigation/native';

// Components
import { Ionicons } from '@expo/vector-icons';
import { Divider, Text } from 'react-native-paper';
import { TouchableOpacity, View } from 'react-native';

// Utils
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';
import { plannerActions } from '@redux/planner/slice';

// Interfaces
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { useAppSelector } from '@app/store';
import { selectIsGuest } from '@redux/auth/slice';

interface SearchItemProps {
  item: any;
  bottomSheetRef: RefObject<BottomSheetMethods>;
}

// Component
const SearchItem: React.FC<SearchItemProps> = ({ item, bottomSheetRef }) => {
  // Redux
  const dispatch = useDispatch();

  const isGuest = useAppSelector(selectIsGuest);

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  // Callbacks
  const handleItemPress = useCallback(() => {
    if (isGuest) {
      bottomSheetRef.current?.expand();
    } else {
      dispatch(
        plannerActions.setPayload({ destination: { name: item.name, country: item.country, image: item.image } })
      );

      navigation.navigate('Planner');
    }
  }, [isGuest, dispatch, item.name, item.country, item.image, navigation, bottomSheetRef]);

  // Renders
  return (
    <TouchableOpacity onPress={handleItemPress}>
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
