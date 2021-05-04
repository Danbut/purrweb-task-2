import styled from 'styled-components/native';

export const Subtitle = styled.Text`
  font-size: ${({theme}) => theme.size.secondary};
  color: ${({theme}) => theme.colors.primary};
  text-transform: uppercase;
  font-weight: 600;
  padding: ${({theme}) => theme.spaces.container}px;
`;
