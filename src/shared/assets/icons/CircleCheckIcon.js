import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CircleCheckIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="none" {...props}>
    <Path fill="#34B27D" d="M0 14C0 6.268 6.268 0 14 0s14 6.268 14 14-6.268 14-14 14S0 21.732 0 14Z" />
    <Path
      fill="#fff"
      d="M19.48 10.088a.817.817 0 0 0-1.16 0l-6.084 6.093-2.556-2.565a.836.836 0 0 0-1.16 1.2l3.136 3.137a.816.816 0 0 0 1.16 0l6.664-6.664a.815.815 0 0 0 0-1.2Z"
    />
  </Svg>
);

export default CircleCheckIcon;
