import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FacebookIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      strokeLinejoin: 'round',
      strokeMiterlimit: 2
    }}
    viewBox="0 0 512 512"
    {...props}>
    <Path
      d="m374.245 285.825 14.104-91.961h-88.233v-59.677c0-25.159 12.325-49.682 51.845-49.682h40.117V6.214S355.67 0 320.864 0c-72.67 0-120.165 44.042-120.165 123.775v70.089h-80.777v91.961h80.777v222.31A320.442 320.442 0 0 0 250.408 512a320.42 320.42 0 0 0 49.708-3.865v-222.31h74.129Z"
      style={{
        fill: '#1877f2',
        fillRule: 'nonzero'
      }}
    />
  </Svg>
);
export default FacebookIcon;
