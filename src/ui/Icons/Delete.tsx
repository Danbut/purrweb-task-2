import React from 'react';
import Svg, {Rect} from 'react-native-svg';

interface SendMessageProps {}

export const SendMessage: React.FC<SendMessageProps> = () => (
  <Svg width="20" height="22" viewBox="0 0 20 22" fill="none">
    <Rect x="-2" y="-1" width="24" height="24" fill="#A369EC" />
  </Svg>
);
