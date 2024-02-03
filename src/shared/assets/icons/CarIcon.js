import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

const CarIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={21} height={20} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        d="M19.586 8.75h-.844l-2.17-4.883a1.25 1.25 0 0 0-1.142-.742H6.242a1.25 1.25 0 0 0-1.142.742L2.93 8.75h-.844a.625.625 0 0 0 0 1.25h.625v6.25a1.25 1.25 0 0 0 1.25 1.25h1.875a1.25 1.25 0 0 0 1.25-1.25V15h7.5v1.25a1.25 1.25 0 0 0 1.25 1.25h1.875a1.25 1.25 0 0 0 1.25-1.25V10h.625a.625.625 0 1 0 0-1.25ZM6.242 4.375h9.188l1.944 4.375H4.298l1.944-4.375ZM5.836 16.25H3.96V15h1.875v1.25Zm10 0V15h1.875v1.25h-1.875Zm1.875-2.5H3.96V10h13.75v3.75Zm-12.5-1.875a.625.625 0 0 1 .625-.625h1.25a.625.625 0 1 1 0 1.25h-1.25a.625.625 0 0 1-.625-.625Zm8.75 0a.625.625 0 0 1 .625-.625h1.25a.625.625 0 1 1 0 1.25h-1.25a.625.625 0 0 1-.625-.625Z"
        {...props}
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.836 0h20v20h-20z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default CarIcon;
