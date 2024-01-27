import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';

const ShieldIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <Mask
      id="a"
      width={17}
      height={21}
      x={4}
      y={2}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'luminance'
      }}>
      <Path fill="#fff" fillRule="evenodd" d="M4 2.5h16.967v20.356H4V2.5Z" clipRule="evenodd" />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill="#212121"
        fillRule="evenodd"
        d="M12.483 4c-.848 0-6.198 1.884-6.815 2.399-.182.183-.189.501-.15 2.63.018 1.026.043 2.42.043 4.35 0 5.201 5.722 7.51 6.921 7.935 1.198-.427 6.923-2.749 6.923-7.935 0-1.932.025-3.327.044-4.353.038-2.127.031-2.445-.162-2.637C18.682 5.884 13.331 4 12.483 4Zm0 18.856a.731.731 0 0 1-.217-.032c-.335-.101-8.205-2.563-8.205-9.445 0-1.917-.025-3.304-.043-4.322-.046-2.543-.056-3.073.601-3.729.785-.787 6.73-2.828 7.864-2.828 1.133 0 7.078 2.041 7.865 2.828.656.656.646 1.186.6 3.726-.018 1.018-.043 2.405-.043 4.325 0 6.882-7.87 9.344-8.205 9.445a.731.731 0 0 1-.217.032Z"
        clipRule="evenodd"
        {...props}
      />
    </G>
    <Path
      fill="#212121"
      fillRule="evenodd"
      d="M11.779 15.019a.75.75 0 0 1-.531-.22l-1.892-1.894a.751.751 0 0 1 1.062-1.061l1.36 1.363 3.369-3.368a.749.749 0 1 1 1.06 1.06l-3.898 3.9a.747.747 0 0 1-.53.22Z"
      clipRule="evenodd"
      {...props}
    />
  </Svg>
);
export default ShieldIcon;
