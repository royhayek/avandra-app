import * as React from 'react';
import Svg, { Path, Mask, G } from 'react-native-svg';

const ActivityIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <Path
      fill="#212121"
      fillRule="evenodd"
      d="M7.215 16.503a.75.75 0 0 1-.594-1.207l2.993-3.89a.75.75 0 0 1 1.058-.132l2.82 2.215 2.467-3.183a.75.75 0 1 1 1.186.918l-2.93 3.78a.746.746 0 0 1-.5.285.741.741 0 0 1-.556-.154l-2.818-2.214-2.531 3.29a.75.75 0 0 1-.595.292Z"
      clipRule="evenodd"
      {...props}
    />
    <Mask
      id="a"
      width={6}
      height={6}
      x={17}
      y={2}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'luminance'
      }}>
      <Path fill="#fff" fillRule="evenodd" d="M17.297 2.5h5.344v5.345h-5.344V2.5Z" clipRule="evenodd" />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill="#212121"
        fillRule="evenodd"
        d="M19.969 4a1.173 1.173 0 0 0 0 2.345 1.173 1.173 0 0 0 0-2.345Zm0 3.845a2.676 2.676 0 0 1-2.672-2.673A2.675 2.675 0 0 1 19.969 2.5a2.674 2.674 0 0 1 2.672 2.672 2.675 2.675 0 0 1-2.672 2.673Z"
        clipRule="evenodd"
        {...props}
      />
    </G>
    <Mask
      id="b"
      width={20}
      height={21}
      x={2}
      y={3}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'luminance'
      }}>
      <Path fill="#fff" fillRule="evenodd" d="M2 3.342h19.862v19.86H2V3.343Z" clipRule="evenodd" />
    </Mask>
    <G mask="url(#b)">
      <Path
        fill="#212121"
        fillRule="evenodd"
        d="M16.233 23.203H7.629C4.262 23.203 2 20.838 2 17.318V9.236C2 5.71 4.262 3.342 7.629 3.342h7.268a.75.75 0 0 1 0 1.5H7.629C5.121 4.842 3.5 6.566 3.5 9.236v8.082c0 2.705 1.582 4.385 4.129 4.385h8.604c2.508 0 4.129-1.721 4.129-4.385v-7.04a.75.75 0 0 1 1.5 0v7.04c0 3.52-2.262 5.885-5.629 5.885Z"
        clipRule="evenodd"
        {...props}
      />
    </G>
  </Svg>
);
export default ActivityIcon;
