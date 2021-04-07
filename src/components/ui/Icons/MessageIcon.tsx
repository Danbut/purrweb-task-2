import React from 'react';
import {ViewProps} from 'react-native';
import {Path, Svg} from 'react-native-svg';

interface MessageIconProps extends ViewProps {
  width?: number;
  height?: number;
}

export const MessageIcon: React.FC<MessageIconProps> = props => (
  <Svg
    width={props.width}
    height={props.height}
    {...props}
    viewBox="0 0 20 20"
    fill="none">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3 2C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V16.5858L4.29289 14.2929C4.48043 14.1054 4.73478 14 5 14H17C17.2652 14 17.5196 13.8946 17.7071 13.7071C17.8946 13.5196 18 13.2652 18 13V3C18 2.73478 17.8946 2.48043 17.7071 2.29289C17.5196 2.10536 17.2652 2 17 2H3ZM0.87868 0.87868C1.44129 0.31607 2.20435 0 3 0H17C17.7957 0 18.5587 0.31607 19.1213 0.87868C19.6839 1.44129 20 2.20435 20 3V13C20 13.7957 19.6839 14.5587 19.1213 15.1213C18.5587 15.6839 17.7957 16 17 16H5.41421L1.70711 19.7071C1.42111 19.9931 0.990991 20.0787 0.617317 19.9239C0.243642 19.7691 0 19.4045 0 19V3C0 2.20435 0.31607 1.44129 0.87868 0.87868Z"
      fill="#BFB393"
    />
  </Svg>
);
