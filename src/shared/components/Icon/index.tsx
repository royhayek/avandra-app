import React from 'react';
import _ from 'lodash';
import * as Icons from '@shared/assets/svg';
import { View } from 'react-native';
import { css } from 'glamor';
import { ms, s } from 'react-native-size-matters';
import { Svg, Path, Line, Circle, G } from 'react-native-svg';

// Interfaces
interface IconProps {
  name: string;
  style?: any;
  color?: string;
  onPress?: () => void;
  size?: number | { w: number; h: number };
}

const Icon: React.FC<IconProps> = function ({
  name = 'google',
  size = ms(22),
  color,
  hoverColor,
  withStroke,
  style,
  onPress,
  ...rest
}) {
  try {
    // console.debug('[Icon] :: ', { Icons })
    const IconComponent = _.has(Icons, name) ? Icons[name] : Icons.info;

    const svgProps = {
      fill: color || hoverColor,
      stroke: withStroke ? hoverColor || color : undefined
    };

    return (
      <View style={[{ flexDirection: 'row', alignItems: 'center' }, style]}>
        <IconComponent width={size} height={size} onPress={onPress} {...svgProps} {...rest} />
      </View>
    );
  } catch (err) {
    console.warn(err);

    return null;
  }
};

export default Icon;
