import * as React from 'react';
import Svg, { Path, Mask, G } from 'react-native-svg';

const LocationIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <Path
      fill="#212121"
      fillRule="evenodd"
      d="M12.25 8.5A1.751 1.751 0 1 0 14 10.251c0-.966-.785-1.751-1.75-1.751Zm0 5A3.253 3.253 0 0 1 9 10.251 3.254 3.254 0 0 1 12.25 7a3.254 3.254 0 0 1 3.25 3.251 3.253 3.253 0 0 1-3.25 3.249Z"
      clipRule="evenodd"
      {...props}
    />
    <Mask
      id="a"
      width={17}
      height={20}
      x={4}
      y={2}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'luminance'
      }}>
      <Path fill="#fff" fillRule="evenodd" d="M4 2h16.5v19.5H4V2Z" clipRule="evenodd" {...props} />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill="#212121"
        fillRule="evenodd"
        d="M12.25 3.5c-3.722 0-6.75 3.057-6.75 6.813 0 4.779 5.624 9.435 6.75 9.683 1.126-.249 6.75-4.905 6.75-9.683C19 6.557 15.972 3.5 12.25 3.5Zm0 18C10.456 21.5 4 15.948 4 10.313 4 5.729 7.701 2 12.25 2c4.549 0 8.25 3.729 8.25 8.313 0 5.635-6.456 11.187-8.25 11.187Z"
        clipRule="evenodd"
        {...props}
      />
    </G>
  </Svg>
);

export default LocationIcon;
