import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {infoItemData} from '../../screens/app/PrayerDetails/constants';
import {InfoItem} from '../InfoItem';
import {ListDivider} from '../../ui';
import styled from 'styled-components/native';

interface InfoBlockProps {}

export const InfoBlock: React.FC<InfoBlockProps> = () => {
  return (
    <>
      <ListDivider />
      <List>
        {infoItemData.map((i, index) => (
          <InfoItemContainer index={index} length={infoItemData.length}>
            <InfoItem {...i} />
          </InfoItemContainer>
        ))}
      </List>
      <ListDivider />
    </>
  );
};

const InfoItemContainer = styled.View<{index: number; length: number}>`
  width: 50%;
  ${({index, theme}) =>
    index % 2 !== 0 && `borderLeftWidth: 1; borderColor: ${theme.colors.line};`}
  ${({index, length, theme}) =>
    index < length - 2 &&
    `borderBottomWidth: 1; borderColor: ${theme.colors.line};`}
`;

const List = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
`;
