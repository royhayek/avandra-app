import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';

const SearchIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <Mask
      id="a"
      width={17}
      height={17}
      x={1}
      y={2}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'luminance'
      }}>
      <Path fill="#fff" fillRule="evenodd" d="M1.668 2.167h16.23v16.23H1.669V2.168Z" clipRule="evenodd" />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill="#BDBDBD"
        fillRule="evenodd"
        d="M9.784 3.417a6.873 6.873 0 0 0-6.866 6.865 6.874 6.874 0 0 0 6.866 6.866 6.873 6.873 0 0 0 6.865-6.866 6.873 6.873 0 0 0-6.865-6.865Zm0 14.98c-4.475 0-8.116-3.64-8.116-8.115s3.64-8.115 8.116-8.115c4.475 0 8.115 3.64 8.115 8.115s-3.64 8.116-8.115 8.116Z"
        clipRule="evenodd"
      />
    </G>
    <Mask
      id="b"
      width={5}
      height={5}
      x={14}
      y={15}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'luminance'
      }}>
      <Path fill="#fff" fillRule="evenodd" d="M14.367 15.256h4.187v4.179h-4.187v-4.18Z" clipRule="evenodd" />
    </Mask>
    <G mask="url(#b)">
      <Path
        fill="#BDBDBD"
        fillRule="evenodd"
        d="M17.93 19.435c-.16 0-.32-.061-.443-.183l-2.936-2.928a.625.625 0 0 1 .883-.886l2.937 2.93a.624.624 0 0 1-.442 1.067Z"
        clipRule="evenodd"
      />
    </G>
  </Svg>
);
export default SearchIcon;
