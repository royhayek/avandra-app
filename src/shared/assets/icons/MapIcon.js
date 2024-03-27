import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const MapIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <Path
      fill="#212121"
      d="M21.461 4.659a.75.75 0 0 0-.643-.136l-5.73 1.432L9.335 3.08a.75.75 0 0 0-.518-.056l-6 1.5a.75.75 0 0 0-.568.727v13.5a.75.75 0 0 0 .932.728l5.73-1.433 5.752 2.876a.764.764 0 0 0 .518.057l6-1.5a.75.75 0 0 0 .568-.728V5.25a.75.75 0 0 0-.289-.591ZM9.75 4.963l4.5 2.25v11.824l-4.5-2.25V4.963Zm-6 .873 4.5-1.125v11.953l-4.5 1.125V5.836Zm16.5 12.328-4.5 1.125V7.336l4.5-1.125v11.953Z"
      {...props}
    />
  </Svg>
);

export default MapIcon;
