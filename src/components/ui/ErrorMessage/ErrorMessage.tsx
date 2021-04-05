import styled from 'styled-components/native';
import {DANGER_COLOR} from '../../assets/styles/colors';
import {SMALL_SPACE} from '../../assets/styles/spaces';
import {SECONDARY_TEXT_SIZE} from '../../assets/styles/typography';

export const ErrorMessage = styled.Text`
  padding: ${SMALL_SPACE}px;
  font-size: ${SECONDARY_TEXT_SIZE};
  color: ${DANGER_COLOR};
`;
