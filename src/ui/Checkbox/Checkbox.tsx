import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {DEFAULT_SPACE, PRIMARY_COLOR, SMALL_SPACE, styles} from '../../assets';

interface CheckboxProps {
  onPress?: (value: boolean) => void;
  value?: boolean;
}

export const StyledCheckbox = styled.View<CheckboxProps>`
  width: 24px;
  height: 24px;
  border: 1px solid #514d47;
  border-radius: 4px;
  background-color: ${({value}) => (value ? PRIMARY_COLOR : '#ffffff')};
  margin-right: ${SMALL_SPACE};
`;

export const Checkbox: React.FC<CheckboxProps> = ({onPress, value}) => {
  const [isChecked, setIsChecked] = useState(value ?? false);

  return (
    <TouchableOpacity
      onPress={() => {
        if (onPress) {
          onPress(!isChecked);
        }
        setIsChecked(!isChecked);
      }}>
      <StyledCheckbox value={isChecked} />
    </TouchableOpacity>
  );
};
