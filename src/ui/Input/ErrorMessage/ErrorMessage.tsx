import styled from 'styled-components/native';

export const ErrorMessage = styled.Text`
  padding: ${({theme}) => theme.spaces.small}px;
  font-size: ${({theme}) => theme.size.secondary};
  color: ${({theme}) => theme.colors.danger};
`;
