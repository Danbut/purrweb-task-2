import styled from 'styled-components/native';
import {DEFAULT_SPACE, LARGE_SPACE, SMALL_SPACE} from '../../assets';

export const Button = styled.TouchableOpacity`
  background-color: #bfb393;
  box-shadow: 0px 2px 15px rgba(66, 78, 117, 0.1);
  border-radius: 15px;
  padding-horizontal: ${DEFAULT_SPACE};
  padding-vertical: ${SMALL_SPACE};
  margin-horizontal: ${LARGE_SPACE};
  margin-vertical: ${DEFAULT_SPACE};
`;
