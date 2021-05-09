import React from 'react';
import styled from 'styled-components/native';

export interface InfoItemProps {
  value: string;
  title: string;
  link?: string;
}

export const InfoItem: React.FC<InfoItemProps> = ({value, title, link}) => {
  return (
    <Container>
      <Value>{value}</Value>
      <Title>{title}</Title>
      <Link>{link}</Link>
    </Container>
  );
};

const Container = styled.View`
  padding-horizontal: ${({theme}) => theme.spaces.container};
  padding-vertical: 32;
`;

const Value = styled.Text`
  color: ${({theme}) => theme.colors.secondary};
  font-size: 22;
`;

const Title = styled.Text`
  font-size: ${({theme}) => theme.size.secondary};
  color: ${({theme}) => theme.colors.text.primary};
`;

const Link = styled.Text`
  color: ${({theme}) => theme.colors.primary};
  font-size: ${({theme}) => theme.size.secondary};
  text-decoration-line: underline;
`;
