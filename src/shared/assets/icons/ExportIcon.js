import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ExportIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" transform="scale(0.9)" {...props}>
    <Path
      fill="#212121"
      d="M19.25 17.5a4.362 4.362 0 0 0-3.13 1.322l-5.043-3.24a4.354 4.354 0 0 0 0-3.164l5.042-3.24a4.375 4.375 0 1 0-.947-1.471l-5.042 3.24a4.375 4.375 0 1 0 0 6.106l5.042 3.24A4.375 4.375 0 1 0 19.25 17.5Zm0-14a2.625 2.625 0 1 1 0 5.25 2.625 2.625 0 0 1 0-5.25ZM7 16.625a2.625 2.625 0 1 1 0-5.25 2.625 2.625 0 0 1 0 5.25ZM19.25 24.5a2.625 2.625 0 1 1 0-5.25 2.625 2.625 0 0 1 0 5.25Z"
      {...props}
    />
  </Svg>
);

export default ExportIcon;
