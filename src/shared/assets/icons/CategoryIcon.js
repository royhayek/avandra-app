import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CategoryIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <Path
      fill="#212121"
      fillRule="evenodd"
      d="M12.86 14.144h8.5v8.5h-8.5v-8.5Zm1.5 1.5v5.5h5.5v-5.5h-5.5ZM1.86 14.144h8.5v8.5h-8.5v-8.5Zm1.5 1.5v5.5h5.5v-5.5h-5.5ZM1.86 3.144h8.5v8.5h-8.5v-8.5Zm1.5 1.5v5.5h5.5v-5.5h-5.5ZM14.102 2.188l8.21 2.2-2.2 8.21-8.21-2.2 2.2-8.21Zm1.06 1.838L13.74 9.338l5.312 1.424 1.424-5.313-5.313-1.423Z"
      clipRule="evenodd"
      {...props}
    />
  </Svg>
);
export default CategoryIcon;
