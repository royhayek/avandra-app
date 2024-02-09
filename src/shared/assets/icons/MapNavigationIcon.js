import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

const MapNavigationIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} fill="none" {...props}>
    <Rect width={52} height={52} fill="#34B27D" fillOpacity={0.08} rx={26} />
    <Rect width={36} height={36} x={8} y={8} fill="#34B27D" rx={18} />
    <Path
      fill="#fff"
      d="M17.674 24.873a1.23 1.23 0 0 0 .882 1.172l5.981 1.84 1.841 5.982a1.232 1.232 0 0 0 1.172.882h.023a1.231 1.231 0 0 0 1.178-.833l5.095-13.743a1.25 1.25 0 0 0-1.582-1.602l-.013.003-13.743 5.099a1.233 1.233 0 0 0-.834 1.2Z"
    />
  </Svg>
);

export default MapNavigationIcon;
