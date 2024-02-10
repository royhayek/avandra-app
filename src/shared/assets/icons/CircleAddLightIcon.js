import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CircleAddLightIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="none" {...props}>
    <Path fill="#EFF9F5" d="M0 14C0 6.268 6.268 0 14 0s14 6.268 14 14-6.268 14-14 14S0 21.732 0 14Z" />
    <Path
      fill="#34B27D"
      d="M21.356 14a.613.613 0 0 1-.612.613h-6.125v6.125a.613.613 0 0 1-1.225 0v-6.125H7.269a.612.612 0 1 1 0-1.225h6.125V7.263a.613.613 0 0 1 1.225 0v6.125h6.125a.613.613 0 0 1 .612.612Z"
    />
  </Svg>
);

export default CircleAddLightIcon;
