// Packages
import React, { useEffect } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase, useNavigation, useRoute } from '@react-navigation/native';

// Components
import PopularList from '@screens/Home/components/PopularList';

// Interfaces
interface PopularScreenProps {}

interface RouteParams {
  type: string;
  title: string;
}

// Component
const PopularScreen: React.FC<PopularScreenProps> = () => {
  // Statics
  const route = useRoute();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const { title, type } = route?.params as RouteParams;

  // Effects
  useEffect(() => {
    navigation.setOptions({ title });
  }, [navigation, title]);

  // Renderers
  return <PopularList type={type} />;
};

PopularScreen.defaultProps = {
  orientation: 'vertical',
  isTitleShown: false,
  type: 'destinations'
};

export default PopularScreen;
