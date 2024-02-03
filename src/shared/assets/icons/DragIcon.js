import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const DragIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="none" {...props}>
    <Path
      fill="#212121"
      fillRule="evenodd"
      d="M11.08 5.833a2.333 2.333 0 1 1-4.666 0 2.333 2.333 0 0 1 4.667 0Zm-2.333 10.5a2.333 2.333 0 1 0 0-4.666 2.333 2.333 0 0 0 0 4.666Zm0 8.167a2.333 2.333 0 1 0 0-4.666 2.333 2.333 0 0 0 0 4.666ZM21.581 5.833a2.333 2.333 0 1 1-4.667 0 2.333 2.333 0 0 1 4.667 0Zm-2.334 10.5a2.333 2.333 0 1 0 0-4.666 2.333 2.333 0 0 0 0 4.666Zm0 8.167a2.333 2.333 0 1 0 0-4.667 2.333 2.333 0 0 0 0 4.667Z"
      clipRule="evenodd"
      {...props}
    />
  </Svg>
);

export default DragIcon;
