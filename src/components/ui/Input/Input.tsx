import React from 'react';
import {TextInputProps} from 'react-native';
import {Label} from './Label';
import {ErrorMessage} from './ErrorMessage';
import {InputWithIcon} from './InputWithIcon';
import {InputBox} from './InputBox';
import {InputWithIconProps} from './InputWithIcon';
import {StyledTextInputProps} from './StyledTextInput';
import {InputBoxProps} from './InputBox';
interface InputProps extends TextInputProps {
  label?: string;
  errors?: {message?: string};
}

export const Input: React.FC<
  InputProps & InputWithIconProps & StyledTextInputProps & InputBoxProps
> = React.forwardRef((props, ref) => {
  const {label, errors, borderRadius, withBorder} = props;

  return (
    <>
      {label && <Label>{label}</Label>}
      <InputBox borderRadius={borderRadius} withBorder={withBorder}>
        <InputWithIcon {...props} ref={ref} />
      </InputBox>
      {errors && <ErrorMessage>{errors.message}</ErrorMessage>}
    </>
  );
});
