import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {infoItemData} from '../../screens/app/PrayerDetails/constants';
import {InfoItem} from '../InfoItem';
import {ListDivider} from '../../ui';
import styled from 'styled-components/native';

interface InfoBlockProps {}

export const InfoBlock: React.FC<InfoBlockProps> = () => {
  return (
    <FlatList
      style={{flexGrow: 0}}
      data={infoItemData}
      scrollEnabled={false}
      renderItem={({item, index}) => (
        <InfoItemContainer index={index}>
          <InfoItem {...item} />
        </InfoItemContainer>
      )}
      numColumns={2}
      keyExtractor={item => `id:${item.id}`}
      ItemSeparatorComponent={ListDivider}
      ListFooterComponent={ListDivider}
      ListHeaderComponent={ListDivider}
    />
  );
};

const InfoItemContainer = styled.View<{index: number}>`
  flex: 0.5;
  ${({index, theme}) =>
    index % 2 !== 0 && `borderLeftWidth: 1; borderColor: ${theme.colors.line};`}
`;
