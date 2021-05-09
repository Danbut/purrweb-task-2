import styled from 'styled-components/native';
import {theme} from '../../assets';

const cardColors = [
  theme.colors.danger,
  theme.colors.primary,
  theme.colors.secondary,
];

export const Mark = styled.View`
  width: 3px;
  height: 24px;
  border-radius: 10px;
  background-color: ${cardColors[
    Math.floor(Math.random() * cardColors.length)
  ]};
  margin-right: ${({theme}) => theme.spaces.small};
`;
