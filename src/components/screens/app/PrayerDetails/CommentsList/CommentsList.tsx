import React from 'react';
import {Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {
  CONTAINER_HORIZONTAL_PADDING,
  PRIMARY_COLOR,
  SECONDARY_TEXT_SIZE,
} from '../../../../../assets';
import {Comment} from '../Comment';
import {comments} from '../constants';
import {ListDivider} from '../../../../ui';

interface CommentsListProps {}

export const CommentsList: React.FC<CommentsListProps> = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: SECONDARY_TEXT_SIZE,
          color: PRIMARY_COLOR,
          textTransform: 'uppercase',
          fontWeight: '600',
          padding: CONTAINER_HORIZONTAL_PADDING,
        }}>
        Comments
      </Text>
      <FlatList
        data={comments}
        renderItem={({item}) => <Comment {...item} />}
        ItemSeparatorComponent={ListDivider}
        ListFooterComponent={ListDivider}
        ListHeaderComponent={ListDivider}
      />
    </View>
  );
};
