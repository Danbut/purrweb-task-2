import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  background-color: #bfb393;
  box-shadow: 0px 2px 15px rgba(66, 78, 117, 0.1);
  border-radius: 15px;
  padding-horizontal: ${({theme}) => theme.spaces.default};
  padding-vertical: ${({theme}) => theme.spaces.small};
  margin-horizontal: ${({theme}) => theme.spaces.large};
  margin-vertical: ${({theme}) => theme.spaces.default};
`;
