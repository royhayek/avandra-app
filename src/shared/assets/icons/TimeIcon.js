import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const TimeIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M9.997 2.917A7.091 7.091 0 0 0 2.914 10a7.091 7.091 0 0 0 7.083 7.084A7.091 7.091 0 0 0 17.081 10a7.091 7.091 0 0 0-7.084-7.083Zm0 15.417c-4.595 0-8.333-3.739-8.333-8.334s3.738-8.333 8.333-8.333c4.595 0 8.334 3.738 8.334 8.333 0 4.595-3.739 8.334-8.334 8.334Z"
      clipRule="evenodd"
      {...props}
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M12.86 13.077a.63.63 0 0 1-.32-.087L9.4 11.116a.629.629 0 0 1-.305-.538v-4.04a.625.625 0 0 1 1.25 0v3.685l2.837 1.692a.626.626 0 0 1-.32 1.162Z"
      clipRule="evenodd"
      {...props}
    />
  </Svg>
);

export default TimeIcon;
