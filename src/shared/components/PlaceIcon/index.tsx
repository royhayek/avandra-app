// Packages
import React from 'react';

// Components
import { CarIcon2, HeartIcon, GraduationCapIcon } from '@shared/assets/icons';

// Utilities
import { useAppTheme } from '@shared/assets/theme';
import Icon from '../Icon';

// Interfaces
interface PlaceIconProps {
  type: string;
  color?: string;
  size?: number;
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
          <Icon
            name="forkKnife"
            color={color ? color : theme.colors.dark ? theme.colors.white : theme.colors.gray[900]}
            {...props}
          />
        );
      case 'shop':
        return (
          <Icon
            name="store"
            color={color ? color : theme.colors.dark ? theme.colors.white : theme.colors.gray[900]}
            {...props}
          />
        );
      case 'coffeeshop':
        return (
          <Icon
            name="coffee"
            color={color ? color : theme.colors.dark ? theme.colors.white : theme.colors.gray[900]}
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
          <Icon
            name="bed"
            color={color ? color : theme.colors.dark ? theme.colors.white : theme.colors.gray[900]}
            {...props}
          />
        );
      default:
        return (
          <Icon
            name="location"
            color={color ? color : theme.colors.dark ? theme.colors.white : theme.colors.gray[900]}
            {...props}
          />
        );
    }
  };

  return renderPlaceIcon();
};

export default PlaceIcon;
