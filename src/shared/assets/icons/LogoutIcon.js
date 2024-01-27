import * as React from 'react';
import Svg, { Path, Mask, G } from 'react-native-svg';

const LogoutIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <Path
      fill="#F75555"
      fillRule="evenodd"
      d="M11.319 22.5H6.433A4.439 4.439 0 0 1 2 18.065V6.936A4.44 4.44 0 0 1 6.433 2.5h4.875a4.441 4.441 0 0 1 4.436 4.436v.932a.75.75 0 0 1-1.5 0v-.932A2.939 2.939 0 0 0 11.308 4H6.433A2.937 2.937 0 0 0 3.5 6.936v11.129A2.937 2.937 0 0 0 6.433 21h4.886a2.929 2.929 0 0 0 2.925-2.924v-.943a.75.75 0 0 1 1.5 0v.943a4.43 4.43 0 0 1-4.425 4.424Z"
      clipRule="evenodd"
    />
    <Mask
      id="a"
      width={15}
      height={3}
      x={8}
      y={11}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'luminance'
      }}>
      <Path fill="#fff" fillRule="evenodd" d="M8.996 11.75h13.541v1.5H8.997v-1.5Z" clipRule="evenodd" />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill="#F75555"
        fillRule="evenodd"
        d="M21.787 13.25H9.747a.75.75 0 0 1 0-1.5h12.04a.75.75 0 0 1 0 1.5Z"
        clipRule="evenodd"
      />
    </G>
    <Mask
      id="b"
      width={5}
      height={9}
      x={18}
      y={8}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'luminance'
      }}>
      <Path fill="#fff" fillRule="evenodd" d="M18.11 8.835h4.427v7.33h-4.428v-7.33Z" clipRule="evenodd" />
    </Mask>
    <G mask="url(#b)">
      <Path
        fill="#F75555"
        fillRule="evenodd"
        d="M18.86 16.166a.75.75 0 0 1-.529-1.281l2.393-2.385-2.394-2.384a.749.749 0 1 1 1.058-1.062l2.928 2.915a.746.746 0 0 1 0 1.062l-2.928 2.916a.747.747 0 0 1-.529.219Z"
        clipRule="evenodd"
      />
    </G>
  </Svg>
);
export default LogoutIcon;
