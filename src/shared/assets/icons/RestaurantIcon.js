import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const RestaurantIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="none" {...props}>
    <Path
      fill="#fff"
      d="M9 11V5a1 1 0 0 1 2 0v6a1 1 0 1 1-2 0Zm18-6v23a1 1 0 1 1-2 0v-6h-6a1 1 0 0 1-1-1c.046-2.396.349-4.78.902-7.11 1.223-5.062 3.54-8.454 6.704-9.81A1 1 0 0 1 27 5Zm-2 1.737C20.979 9.808 20.191 17.29 20.038 20H25V6.737ZM14.986 4.836a1 1 0 1 0-1.972.329L14 11.078a4 4 0 1 1-8 0l.985-5.913a1 1 0 1 0-1.972-.33l-1 6A1.02 1.02 0 0 0 4 11a6.009 6.009 0 0 0 5 5.915V28a1 1 0 1 0 2 0V16.915A6.009 6.009 0 0 0 16 11c0-.055-.005-.11-.014-.164l-1-6Z"
      {...props}
    />
  </Svg>
);

export default RestaurantIcon;
