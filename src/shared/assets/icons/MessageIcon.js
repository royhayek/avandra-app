import * as React from 'react';
import Svg, { Path, Mask, G } from 'react-native-svg';

const MessageIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} fill="none" {...props}>
    <Path
      fill="#212121"
      fillRule="evenodd"
      d="M9.814 11.72a2.535 2.535 0 0 1-1.578-.553L4.5 8.153a.626.626 0 0 1 .784-.973l3.734 3.01c.47.372 1.13.372 1.602-.003l3.697-3.005a.624.624 0 1 1 .79.97l-3.704 3.01a2.55 2.55 0 0 1-1.588.557"
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
      <Path fill="#fff" fillRule="evenodd" d="M.832 2.166h17.917v16.25H.832V2.166Z" clipRule="evenodd" />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill="#212121"
        fillRule="evenodd"
        d="M5.698 17.166h8.183c.002-.002.008 0 .014 0 .95 0 1.794-.34 2.44-.986.751-.747 1.164-1.822 1.164-3.024V7.433c0-2.328-1.522-4.017-3.618-4.017H5.7c-2.096 0-3.618 1.69-3.618 4.017v5.723c0 1.202.413 2.277 1.163 3.024.647.646 1.491.986 2.441.986h.012Zm-.014 1.25c-1.286 0-2.434-.467-3.321-1.35-.988-.985-1.531-2.373-1.531-3.91V7.433c0-3.003 2.093-5.267 4.868-5.267h8.181c2.775 0 4.868 2.264 4.868 5.267v5.723c0 1.537-.544 2.925-1.531 3.91-.886.883-2.035 1.35-3.323 1.35H5.684Z"
        clipRule="evenodd"
        {...props}
      />
    </G>
  </Svg>
);

export default MessageIcon;
