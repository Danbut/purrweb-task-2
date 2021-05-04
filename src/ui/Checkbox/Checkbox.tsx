import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
interface CheckboxProps {
  onPress?: () => void;
  value?: boolean;
}

export const StyledCheckbox = styled.View<CheckboxProps>`
  width: 24px;
  height: 24px;
  border: 1px solid #514d47;
  border-radius: 4px;
  background-color: ${({value, theme}) =>
    value ? theme.colors.primary : theme.colors.white};
  margin-right: ${({theme}) => theme.spaces.small};
`;

export const Checkbox: React.FC<CheckboxProps> = ({onPress, value}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <StyledCheckbox value={value} />
    </TouchableOpacity>
  );
};
