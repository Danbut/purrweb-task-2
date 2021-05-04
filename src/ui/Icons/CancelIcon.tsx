import React, {useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {ThemeContext} from 'styled-components/native';

interface CancelIconProps {
  width?: number;
  height?: number;
}

export const CancelIcon: React.FC<CancelIconProps> = ({width, height}) => {
  const theme = useContext(ThemeContext);

  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={theme.colors.primary}>
      <Path d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" />
    </Svg>
  );
};

CancelIcon.defaultProps = {
  width: 24,
  height: 24,
};
