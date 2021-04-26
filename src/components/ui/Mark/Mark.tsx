import React from 'react';
import styled from 'styled-components/native';
import {
  DANGER_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  SMALL_SPACE,
} from '../../../assets';

const cardColors = [DANGER_COLOR, PRIMARY_COLOR, SECONDARY_COLOR];

export const Mark = styled.View`
  width: 3px;
  height: 24px;
  border-radius: 10px;
  background-color: ${cardColors[
    Math.floor(Math.random() * cardColors.length)
  ]};
  margin-right: ${SMALL_SPACE};
`;
