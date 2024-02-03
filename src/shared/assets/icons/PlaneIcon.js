import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

const PlaneIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={21} height={20} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        d="M17.67 16.875a.625.625 0 0 1-.624.625H5.796a.625.625 0 1 1 0-1.25h11.25a.625.625 0 0 1 .625.625Zm1.876-6.25V12.5a.625.625 0 0 1-.625.625H4.94a3.105 3.105 0 0 1-2.992-2.227l-1.1-3.664a1.25 1.25 0 0 1 1.197-1.609h.625c.165 0 .324.066.441.183L4.805 7.5h1.757L5.86 5.395A1.25 1.25 0 0 1 7.046 3.75h.625a.625.625 0 0 1 .442.183L11.68 7.5h4.74a3.125 3.125 0 0 1 3.126 3.125Zm-1.25 0A1.875 1.875 0 0 0 16.42 8.75h-5a.625.625 0 0 1-.442-.183L7.412 5h-.366l.976 2.927a.625.625 0 0 1-.593.823H4.546a.625.625 0 0 1-.442-.183L2.412 6.875h-.366l1.099 3.664a1.863 1.863 0 0 0 1.797 1.336h13.354v-1.25Z"
        {...props}
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.172 0h20v20h-20z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default PlaneIcon;
