import styled from 'styled-components/native';

export interface InputBoxProps {
  borderRadius?: number;
  withBorder?: boolean;
  padding?: number;
}

export const InputBox = styled.View<InputBoxProps>`
  ${({withBorder, theme}) =>
    withBorder ? `border: 1px solid ${theme.colors.line};` : ''}
  border-radius: ${({borderRadius}) => borderRadius}px;
  display: flex;
  flex-direction: row;
  padding: ${({padding}) => padding}px;
`;

InputBox.defaultProps = {
  borderRadius: 10,
  withBorder: true,
  padding: 14,
};
