import {TextInput, TextInputProps} from 'react-native';
import styled from 'styled-components/native';
import {
  PRIMARY_COLOR,
  PRIMARY_TEXT_COLOR,
  PRIMARY_TEXT_SIZE,
  SECONDARY_TEXT_COLOR,
} from '../../../assets';

export interface StyledTextInputProps extends TextInputProps {
  isBold?: boolean;
  ref?: React.ForwardedRef<TextInput>;
}

export const StyledTextInput = styled.TextInput<StyledTextInputProps>`
  color: ${PRIMARY_TEXT_COLOR};
  font-size: ${PRIMARY_TEXT_SIZE};
  ${({isBold}) => (isBold ? 'font-weight: 500;' : '')}
`;

StyledTextInput.defaultProps = {
  isBold: false,
  selectionColor: PRIMARY_COLOR,
  placeholderTextColor: SECONDARY_TEXT_COLOR,
};
