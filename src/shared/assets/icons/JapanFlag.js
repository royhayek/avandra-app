import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

const JapanFlag = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <Rect width={25} height={17.571} x={0.5} y={1.214} fill="#fff" rx={1.5} />
    <Rect width={25} height={17.571} x={0.5} y={1.214} stroke="#EEE" rx={1.5} />
    <Path fill="#F93939" d="M13.001 14.333a4.333 4.333 0 1 0 0-8.666 4.333 4.333 0 0 0 0 8.666Z" />
  </Svg>
);

export default JapanFlag;
