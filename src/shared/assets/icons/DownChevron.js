import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const DownChevron = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} viewBox="0 -2 15 15" fill="none" {...props}>
    <Path
      fill="#fff"
      d="M.722 1.141a.625.625 0 0 1 .814-.06l.07.06 5.391 5.391 5.392-5.39a.625.625 0 0 1 .814-.061l.07.06c.222.222.242.57.06.814l-.06.07L7.439 7.86a.625.625 0 0 1-.813.06l-.07-.06L.721 2.025a.625.625 0 0 1 0-.884Z"
      {...props}
    />
  </Svg>
);

export default DownChevron;
