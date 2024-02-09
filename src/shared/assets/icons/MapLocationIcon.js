import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

const MapLocationIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} fill="none" {...props}>
    <Rect width={52} height={52} fill="#34B27D" rx={26} />
    <Path fill="#fff" d="M26 30.667a4.667 4.667 0 1 0 0-9.334 4.667 4.667 0 0 0 0 9.334Z" />
    <Path
      fill="#fff"
      d="M27.166 16.747v-2.414h-2.333v2.414a9.345 9.345 0 0 0-8.086 8.086h-2.414v2.334h2.414a9.344 9.344 0 0 0 8.086 8.086v2.414h2.333v-2.414a9.341 9.341 0 0 0 8.086-8.086h2.414v-2.334h-2.413a9.342 9.342 0 0 0-8.087-8.086ZM26 33c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7Z"
    />
  </Svg>
);

export default MapLocationIcon;
