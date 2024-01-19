import * as React from 'react';
import Svg, { Path, Mask, G } from 'react-native-svg';

const MessageIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M9.814 11.72a2.535 2.535 0 0 1-1.578-.552L4.5 8.155a.626.626 0 0 1 .784-.973l3.734 3.01c.47.371 1.13.371 1.602-.004l3.697-3.005a.624.624 0 1 1 .79.97l-3.704 3.01a2.549 2.549 0 0 1-1.588.558"
      clipRule="evenodd"
      {...props}
    />
    <Mask
      id="a"
      width={19}
      height={17}
      x={0}
      y={2}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'luminance'
      }}>
      <Path fill="#fff" fillRule="evenodd" d="M.836 2.167h17.917v16.25H.835V2.167Z" clipRule="evenodd" />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M5.702 17.167h8.183c.002-.002.008 0 .013 0 .951 0 1.795-.34 2.441-.986.751-.748 1.164-1.822 1.164-3.024V7.433c0-2.327-1.522-4.016-3.618-4.016H5.703c-2.095 0-3.617 1.689-3.617 4.016v5.724c0 1.202.413 2.276 1.163 3.024.647.646 1.491.986 2.441.986h.012Zm-.014 1.25c-1.286 0-2.435-.467-3.321-1.35-.988-.985-1.531-2.374-1.531-3.91V7.433c0-3.002 2.092-5.266 4.867-5.266h8.182c2.775 0 4.868 2.264 4.868 5.266v5.724c0 1.536-.544 2.925-1.531 3.91-.886.882-2.035 1.35-3.324 1.35h-8.21Z"
        clipRule="evenodd"
        {...props}
      />
    </G>
  </Svg>
);
export default MessageIcon;
