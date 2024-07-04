import _ from 'lodash';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const BedIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <Path
      fill="#212121"
      d="M19.5 6.75H2.25V4.5a.75.75 0 0 0-1.5 0v15a.75.75 0 1 0 1.5 0v-3h19.5v3a.75.75 0 1 0 1.5 0v-9a3.75 3.75 0 0 0-3.75-3.75ZM2.25 8.25H9V15H2.25V8.25ZM10.5 15V8.25h9a2.25 2.25 0 0 1 2.25 2.25V15H10.5Z"
      {..._.omit(props, ['transform'])}
    />
  </Svg>
);

export default BedIcon;
