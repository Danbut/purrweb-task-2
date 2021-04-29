import styled from 'styled-components/native';
import {LINE_COLOR} from '../../../assets';

export interface InputBoxProps {
  borderRadius?: number;
  withBorder?: boolean;
  padding?: number;
}

export const InputBox = styled.View<InputBoxProps>`
  ${({withBorder}) => (withBorder ? `border: 1px solid ${LINE_COLOR};` : '')}
  border-radius: ${({borderRadius}) => borderRadius}px;
  display: flex;
  flex-direction: row;
  padding: ${({padding}) => padding}px;
`;

InputBox.defaultProps = {
  borderRadius: 10,
  withBorder: true,
  padding: 14,
};
