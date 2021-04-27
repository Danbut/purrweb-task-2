import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface SendMessageProps {}

export const SendMessage: React.FC<SendMessageProps> = () => (
  <Svg enable-background="new 0 0 55 55" viewBox="0 0 55 55">
    <Path
      d="M52.2,2.8c-0.27-0.27-0.66-0.36-1.02-0.24L3.19,18.49c-0.33,0.11-0.58,0.38-0.66,0.72c-0.08,0.34,0.02,0.69,0.27,0.94
		l9.65,9.65l-0.18,11.92c0,0.27,0.1,0.53,0.29,0.72c0.19,0.19,0.44,0.29,0.71,0.29h0.02l11.9-0.19l9.66,9.66
		c0.19,0.19,0.45,0.29,0.71,0.29c0.08,0,0.15-0.01,0.23-0.03c0.34-0.08,0.61-0.33,0.72-0.66L52.44,3.82
		C52.56,3.46,52.47,3.07,52.2,2.8z M45.02,6.71L13.57,28.1l-8.21-8.22L45.02,6.71z M14.45,29.92L47.72,7.29L25.08,40.55l-10.79,0.17
		L14.45,29.92z M35.12,49.64l-8.22-8.22l21.37-31.39L35.12,49.64z"
    />
  </Svg>
);
