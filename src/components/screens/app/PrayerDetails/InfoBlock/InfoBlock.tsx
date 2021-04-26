import React from 'react';
import {View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {infoItemData} from '../constants';
import {InfoItem} from '../InfoItem';
import {ListDivider} from '../../../../ui';

interface InfoBlockProps {}

export const InfoBlock: React.FC<InfoBlockProps> = () => {
  return (
    <FlatList
      style={{flexGrow: 0}}
      data={infoItemData}
      scrollEnabled={false}
      renderItem={({item, index}) => (
        <View
          style={[
            {flex: 0.5},
            index % 2 !== 0 && {borderLeftWidth: 1, borderColor: '#e5e5e5'},
          ]}>
          <InfoItem {...item} />
        </View>
      )}
      numColumns={2}
      keyExtractor={item => `id:${item.id}`}
      ItemSeparatorComponent={ListDivider}
      ListFooterComponent={ListDivider}
      ListHeaderComponent={ListDivider}
    />
  );
};
