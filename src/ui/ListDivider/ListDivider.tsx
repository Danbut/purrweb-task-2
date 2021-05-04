import styled from 'styled-components/native';

export const ListDivider = styled.View`
  border-bottom-width: 1px;
  border-color: ${({theme}) => theme.colors.line};
`;
