import React from 'react';
import {TextInputProps} from 'react-native';
import styled from 'styled-components/native';
import {
  PRIMARY_COLOR,
  PRIMARY_TEXT_COLOR,
  SECONDARY_TEXT_COLOR,
} from '../../assets/styles/colors';

interface InputProps extends TextInputProps {}

const StyledTextInput = styled.TextInput`
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  padding: 14px;
  color: ${PRIMARY_TEXT_COLOR};
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
