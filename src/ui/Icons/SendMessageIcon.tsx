import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {SECONDARY_COLOR} from '../../assets';

interface SendMessageIcon {
  width?: number;
  height?: number;
}

export const SendMessageIcon: React.FC<SendMessageIcon> = ({width, height}) => (
  <Svg
    width={width}
    height={height}
    enable-background="new 0 0 32 32"
    viewBox="0 0 32 32"
    fill={SECONDARY_COLOR}>
    <Path d="M11.55371,20.44629l4.26465,9.94727c0.1543,0.3623,0.50684,0.59863,0.90039,0.60645c0.00586,0,0.0127,0,0.01855,0c0.38574,0,0.73828-0.22266,0.90332-0.57227l13.2627-28c0.18164-0.38184,0.10254-0.83594-0.19629-1.13477s-0.75391-0.37891-1.13477-0.19629l-28,13.2627C1.2168,14.52734,0.99316,14.88867,1,15.28125c0.00781,0.39355,0.24414,0.74609,0.60645,0.90039L11.55371,20.44629z M27.89746,4.10254L16.7832,27.56836l-3.54883-8.27734c-0.10059-0.23633-0.28906-0.4248-0.52539-0.52539L4.43164,15.2168L27.89746,4.10254z" />
  </Svg>
);
