import React from 'react';
import {ViewProps} from 'react-native';
import {Path, Svg} from 'react-native-svg';

interface PlusIconProps extends ViewProps {
  width?: number;
  height?: number;
  onPress?: () => void;
}

export const PlusIcon: React.FC<PlusIconProps> = props => (
  <Svg
    width={props.width}
    height={props.height}
    {...props}
    viewBox="0 0 16 16"
    fill="none"
    onPress={props.onPress}>
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9 1C9 0.447715 8.55229 0 8 0C7.44772 0 7 0.447715 7 1V7H1C0.447715 7 0 7.44772 0 8C0 8.55229 0.447715 9 1 9H7V15C7 15.5523 7.44772 16 8 16C8.55229 16 9 15.5523 9 15V9H15C15.5523 9 16 8.55229 16 8C16 7.44772 15.5523 7 15 7H9V1Z"
      fill="#72A8BC"
    />
  </Svg>
);
