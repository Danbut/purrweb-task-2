import React from 'react';
import {TextInputProps} from 'react-native';
import styled from 'styled-components/native';
import {
  LINE_COLOR,
  PRIMARY_COLOR,
  PRIMARY_TEXT_COLOR,
  SECONDARY_TEXT_COLOR,
} from '../../assets/styles/colors';
import {PRIMARY_TEXT_SIZE} from '../../assets/styles/typography';

interface InputProps extends TextInputProps {
  borderRadius?: number;
  bold?: boolean;
}

const StyledTextInput = styled.TextInput<InputProps>`
  border: 1px solid ${LINE_COLOR};
  border-radius: ${({borderRadius}) => borderRadius ?? 10}px;
  padding: 14px;
  color: ${PRIMARY_TEXT_COLOR};
  font-size: ${PRIMARY_TEXT_SIZE};
  ${({bold}) => (bold ? 'font-weight: 500;' : '')}
`;

export const Input: React.FC<InputProps> = props => {
  return (
    <StyledTextInput
      {...props}
      selectionColor={props?.selectionColor || PRIMARY_COLOR}
      placeholderTextColor={
        props?.placeholderTextColor || SECONDARY_TEXT_COLOR
      }></StyledTextInput>
  );
};
