// Packages
import React from 'react';

// Components
import {
  BedIcon,
  CarIcon2,
  StoreIcon,
  HeartIcon,
  CoffeeIcon,
  LandmarkIcon,
  RestaurantIcon,
  GraduationCapIcon
} from '@shared/assets/icons';

// Utilities
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
interface PlaceIconProps {
  type: string;
  color?: string;
  transform?: string;
}

// Component

const PlaceIcon: React.FC<PlaceIconProps> = ({ type, color, ...props }) => {
  // Statics
  const theme = useAppTheme();

  // Renderers
  const renderPlaceIcon = () => {
    switch (type) {
      case 'restaurant':
        return (
          <RestaurantIcon
            fill={color ? color : theme.colors.dark ? theme.colors.white : theme.colors.gray[900]}
            {...props}
          />
        );
      case 'shop':
        return (
          <StoreIcon
            width={30}
            height={30}
            transform="scale(1.2)"
            fill={color ? color : theme.colors.dark ? theme.colors.white : theme.colors.gray[900]}
            {...props}
          />
        );
      case 'coffeeshop':
        return (
          <CoffeeIcon
            width={30}
            height={30}
            transform="scale(1.2)"
            fill={color ? color : theme.colors.dark ? theme.colors.white : theme.colors.gray[900]}
            {...props}
          />
        );
      case 'health':
        return (
          <HeartIcon
            fill={color ? color : theme.colors.dark ? theme.colors.white : theme.colors.gray[900]}
            {...props}
          />
        );
      case 'education':
        return (
          <GraduationCapIcon
            fill={color ? color : theme.colors.dark ? theme.colors.white : theme.colors.gray[900]}
            {...props}
          />
        );
      case 'transport':
        return (
          <CarIcon2 fill={color ? color : theme.colors.dark ? theme.colors.white : theme.colors.gray[900]} {...props} />
        );
      case 'accommodation':
        return (
          <BedIcon
            width={30}
            height={30}
            transform="scale(1.2)"
            fill={color ? color : theme.colors.dark ? theme.colors.white : theme.colors.gray[900]}
            {...props}
          />
        );
      default:
        return (
          <LandmarkIcon
            fill={color ? color : theme.colors.dark ? theme.colors.white : theme.colors.gray[900]}
            {...props}
          />
        );
    }
  };

  return renderPlaceIcon();
};

export default PlaceIcon;
