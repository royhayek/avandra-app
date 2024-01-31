import * as React from 'react';
import Svg, { G, Path, Defs, LinearGradient, Stop, ClipPath } from 'react-native-svg';

const FacebookIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="url(#b)"
        d="M12 .667c-6.628 0-12 5.372-12 12 0 6.627 5.372 12 12 12s12-5.373 12-12c0-6.628-5.372-12-12-12Z"
      />
      <Path
        fill="#fff"
        d="M13.73 17.525h3.257l.511-3.309H13.73v-1.808c0-1.374.45-2.593 1.735-2.593h2.065V6.93c-.363-.05-1.13-.156-2.58-.156-3.03 0-4.805 1.599-4.805 5.243v2.201H7.031v3.308h3.113v9.093c.617.092 1.242.155 1.883.155.58 0 1.145-.053 1.703-.129v-9.12Z"
      />
    </G>
    <Defs>
      <LinearGradient id="b" x1={3.596} x2={21.969} y1={4.263} y2={22.636} gradientUnits="userSpaceOnUse">
        <Stop stopColor="#2AA4F4" />
        <Stop offset={1} stopColor="#007AD9" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 .667h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default FacebookIcon;
