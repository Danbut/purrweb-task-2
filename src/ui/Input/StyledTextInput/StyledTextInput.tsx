import {TextInput, TextInputProps} from 'react-native';
import styled from 'styled-components/native';
import {theme} from '../../../assets';

export interface StyledTextInputProps extends TextInputProps {
  isBold?: boolean;
  ref?: React.ForwardedRef<TextInput>;
}

export const StyledTextInput = styled.TextInput<StyledTextInputProps>`
  color: ${({theme}) => theme.colors.text.primary};
  font-size: ${({theme}) => theme.size.primary};
  ${({isBold}) => (isBold ? 'font-weight: 500;' : '')}
`;

StyledTextInput.defaultProps = {
  isBold: false,
  selectionColor: theme.colors.primary,
  placeholderTextColor: theme.colors.text.secondary,
};
