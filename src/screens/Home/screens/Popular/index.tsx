// Packages
import React, { useEffect } from 'react';

// Components
import PopularList from '@screens/Home/components/PopularList';

// Interfaces
import { useNavigation, useRoute } from '@react-navigation/native';

interface PopularScreenProps {}

interface RouteParams {
  type: string;
  title: string;
}

// Component
const PopularScreen: React.FC<PopularScreenProps> = () => {
  // Statics
  const route = useRoute();
  const navigation = useNavigation();

  const { title, type } = route?.params as RouteParams;

  // Effects
  useEffect(() => {
    // Change the screen name when the component mounts
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
