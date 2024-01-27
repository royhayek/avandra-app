import * as React from 'react';
import Svg, { G, Mask, Path, Defs } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const PaperIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <G filter="url(#a)">
      <Mask
        id="b"
        width={18}
        height={21}
        x={4}
        y={2}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: 'luminance'
        }}>
        <Path fill="#fff" fillRule="evenodd" d="M4 2.512h17.053v19.853H4V2.512Z" clipRule="evenodd" />
      </Mask>
      <G mask="url(#b)">
        <Path
          fill="#212121"
          fillRule="evenodd"
          d="M8.573 4.012a3.087 3.087 0 0 0-3.072 2.997v10.695a3.087 3.087 0 0 0 3.01 3.162h8.063c1.67-.07 2.991-1.456 2.98-3.156V8.84l-4.636-4.828H8.573Zm.012 18.354h-.109a4.585 4.585 0 0 1-4.475-4.678V6.99c.058-2.481 2.107-4.48 4.57-4.48H15.238c.204 0 .4.084.541.23l5.065 5.278a.75.75 0 0 1 .21.519v9.166a4.617 4.617 0 0 1-4.45 4.66l-8.019.002Z"
          clipRule="evenodd"
          {...props}
        />
      </G>
      <Path
        fill="#212121"
        fillRule="evenodd"
        d="M14.787 16.608h-5.4a.75.75 0 0 1 0-1.5h5.4a.75.75 0 0 1 0 1.5ZM12.743 12.856H9.387a.75.75 0 0 1 0-1.5h3.356a.75.75 0 0 1 0 1.5ZM20.3 9.484h-2.755a3.332 3.332 0 0 1-3.318-3.325V3.25a.75.75 0 0 1 1.5 0v2.909c0 1.004.817 1.822 1.82 1.825H20.3a.75.75 0 0 1 0 1.5Z"
        clipRule="evenodd"
        {...props}
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default PaperIcon;
