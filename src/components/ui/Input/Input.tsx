import React from 'react';
import {TextInputProps} from 'react-native';
import {TextInput} from 'react-native';
import styled from 'styled-components/native';
import {
  LINE_COLOR,
  PRIMARY_COLOR,
  PRIMARY_TEXT_COLOR,
  SECONDARY_TEXT_COLOR,
  PRIMARY_TEXT_SIZE,
  styles,
} from '../../../assets';
import {Label} from '../Label';
import {ErrorMessage} from '../ErrorMessage';
import {PlusIcon} from '../Icons';

interface InputProps extends TextInputProps {
  borderRadius?: number;
  bold?: boolean;
  ref?: React.ForwardedRef<TextInput>;
  icon?: boolean;
  label?: string;
  errors?: {message: string};
  iconOnPress?: () => void;
}

const InputBox = styled.View<InputProps>`
  border: 1px solid ${LINE_COLOR};
  border-radius: ${({borderRadius}) => borderRadius ?? 10}px;
  display: flex;
  flex-direction: row;
  padding: 14px;
`;

const StyledTextInput = styled.TextInput<InputProps>`
  color: ${PRIMARY_TEXT_COLOR};
  font-size: ${PRIMARY_TEXT_SIZE};
  ${({bold}) => (bold ? 'font-weight: 500;' : '')}
`;

export const Input: React.FC<InputProps> = React.forwardRef((props, ref) => {
  const {
    label,
    errors,
    borderRadius,
    icon,
    selectionColor,
    placeholderTextColor,
    iconOnPress,
  } = props;

  return (
    <>
      {label && <Label>{label}</Label>}
      <InputBox borderRadius={borderRadius}>
        {icon && (
          <PlusIcon
            width={24}
            height={24}
            style={styles.inputIcon}
            onPress={iconOnPress}
          />
        )}
        <StyledTextInput
          {...props}
          ref={ref}
          selectionColor={selectionColor || PRIMARY_COLOR}
          placeholderTextColor={placeholderTextColor || SECONDARY_TEXT_COLOR}
        />
      </InputBox>
      {errors && <ErrorMessage>{errors.message}</ErrorMessage>}
    </>
  );
});
