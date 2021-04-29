import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {PRIMARY_COLOR} from '../../assets';

interface LogoutIconProps {
  width?: number;
  height?: number;
}

export const LogoutIcon: React.FC<LogoutIconProps> = ({width, height}) => (
  <Svg width={width} height={height} viewBox="0 0 8 8">
    <Path
      d="M3 0v1h4v5H3v1h5V0H3zM2 2L0 3.5 2 5V4h4V3H2V2z"
      fill={PRIMARY_COLOR}
    />
  </Svg>
);
