import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const NavigationIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={30} height={31} fill="none" {...props}>
    <Path
      fill="#fff"
      d="m4.003 12.776 21.99-8.151.02-.006a2 2 0 0 1 2.537 2.557l-8.157 21.99a1.971 1.971 0 0 1-1.884 1.334h-.037a1.972 1.972 0 0 1-1.875-1.411l-2.945-9.57-9.57-2.945a2 2 0 0 1-.078-3.798h-.001Zm.666 1.886 9.57 2.946a2 2 0 0 1 1.323 1.322l2.945 9.57.007-.021L26.67 6.5 4.692 14.652l-.02.008-.003.002Z"
      {...props}
    />
  </Svg>
);

export default NavigationIcon;
