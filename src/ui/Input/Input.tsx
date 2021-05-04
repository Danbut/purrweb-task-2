import React from 'react';
import {ErrorMessage} from './ErrorMessage';
import {InputWithIcon} from './InputWithIcon';
import {InputBox} from './InputBox';
import {InputWithIconProps} from './InputWithIcon';
import {StyledTextInputProps} from './StyledTextInput';
import {InputBoxProps} from './InputBox';
import styled from 'styled-components/native';
interface InputProps {
  label?: string;
  errors?: {message?: string};
}

export const Input: React.FC<
  InputProps & InputWithIconProps & StyledTextInputProps & InputBoxProps
> = React.forwardRef((props, ref) => {
  const {label, errors, borderRadius, withBorder, padding} = props;

  return (
    <>
      {label && <Label>{label}</Label>}
      <InputBox
        borderRadius={borderRadius}
        withBorder={withBorder}
        padding={padding}>
        <InputWithIcon {...props} ref={ref} />
      </InputBox>
      {errors && <ErrorMessage>{errors.message}</ErrorMessage>}
    </>
  );
});

export const Label = styled.Text`
  margin-bottom: ${({theme}) => theme.spaces.small};
  font-size: ${({theme}) => theme.size.primary};
`;
