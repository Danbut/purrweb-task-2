import React, {useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {ThemeContext} from 'styled-components/native';

interface SubmitIconProps {
  width?: number;
  height?: number;
}

export const SubmitIcon: React.FC<SubmitIconProps> = ({width, height}) => {
  const theme = useContext(ThemeContext);

  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill={theme.colors.primary}>
      <Path d="M12.32,26.5a3.32,3.32,0,0,1-2.36-1l-7-7a3.35,3.35,0,0,1,0-4.72,3.4,3.4,0,0,1,4.72,0l4.64,4.64,12-12a3.42,3.42,0,0,1,4.7,0,3.35,3.35,0,0,1,0,4.71h0L14.68,25.52A3.32,3.32,0,0,1,12.32,26.5Zm-7-11.66a1.32,1.32,0,0,0-.94.4,1.35,1.35,0,0,0,0,1.89l7,7a1.34,1.34,0,0,0,1.89,0L27.61,9.78a1.35,1.35,0,0,0,0-1.89,1.37,1.37,0,0,0-1.88,0L13,20.57a1,1,0,0,1-1.41,0L6.28,15.23A1.34,1.34,0,0,0,5.33,14.83Zm23-4.35h0Z" />
    </Svg>
  );
};

SubmitIcon.defaultProps = {
  width: 24,
  height: 24,
};
