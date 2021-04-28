import styled from 'styled-components/native';
import {
  CONTAINER_HORIZONTAL_PADDING,
  PRIMARY_COLOR,
  SECONDARY_TEXT_SIZE,
} from '../../assets';

export const Subtitle = styled.Text`
  font-size: ${SECONDARY_TEXT_SIZE};
  color: ${PRIMARY_COLOR};
  text-transform: uppercase;
  font-weight: 600;
  padding: ${CONTAINER_HORIZONTAL_PADDING}px;
`;
