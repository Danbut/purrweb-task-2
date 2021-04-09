import styled from 'styled-components/native';
import {DANGER_COLOR, SMALL_SPACE, SECONDARY_TEXT_SIZE} from '../../../assets';

export const ErrorMessage = styled.Text`
  padding: ${SMALL_SPACE}px;
  font-size: ${SECONDARY_TEXT_SIZE};
  color: ${DANGER_COLOR};
`;
