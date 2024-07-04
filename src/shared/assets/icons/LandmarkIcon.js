import * as React from 'react';
import Svg, { Path, Mask, G } from 'react-native-svg';

const LandmarkIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="none" {...props}>
    <Path
      fill="#000000"
      fillRule="evenodd"
      d="M16.333 11.334A2.336 2.336 0 0 0 14 13.669 2.335 2.335 0 0 0 16.333 16a2.335 2.335 0 0 0 2.334-2.332 2.336 2.336 0 0 0-2.334-2.335Zm0 6.667A4.337 4.337 0 0 1 12 13.669a4.339 4.339 0 0 1 4.333-4.335 4.339 4.339 0 0 1 4.334 4.335A4.337 4.337 0 0 1 16.333 18Z"
      clipRule="evenodd"
      {...props}
    />
    <Mask
      id="a"
      width={23}
      height={27}
      x={5}
      y={2}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'luminance'
      }}>
      <Path fill="#fff" fillRule="evenodd" d="M5.332 2.667h22v26h-22v-26Z" clipRule="evenodd" />
    </Mask>
    <G>
      <Path
        fill="#212121"
        fillRule="evenodd"
        d="M16.332 4.667c-4.963 0-9 4.076-9 9.084 0 6.372 7.499 12.58 9 12.91 1.501-.331 9-6.54 9-12.91 0-5.008-4.037-9.084-9-9.084Zm0 24c-2.392 0-11-7.403-11-14.916 0-6.112 4.935-11.084 11-11.084s11 4.972 11 11.084c0 7.513-8.608 14.916-11 14.916Z"
        clipRule="evenodd"
        {...props}
      />
    </G>
  </Svg>
);

export default LandmarkIcon;
