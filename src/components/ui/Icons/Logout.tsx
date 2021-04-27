import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface SendMessageProps {}

export const SendMessage: React.FC<SendMessageProps> = () => (
  <Svg width="8" height="8" viewBox="0 0 8 8">
    <Path d="M3 0v1h4v5H3v1h5V0H3zM2 2L0 3.5 2 5V4h4V3H2V2z" />
  </Svg>
);
