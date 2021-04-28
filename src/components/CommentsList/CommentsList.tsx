import React, {useEffect} from 'react';
import {RefreshControl, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {
  CONTAINER_HORIZONTAL_PADDING,
  PRIMARY_COLOR,
  SECONDARY_TEXT_SIZE,
} from '../../assets';
import {Comment} from '../Comment';
import {ListDivider} from '../../ui';
import {useAppDispatch, useAppSelector} from '../../state/hooks';
import {
  getComments,
  selectComments,
} from '../../state/ducks/comments/commentsSlice';
import {selectColumnsIsLoading} from '../../state/ducks/columns/columnsSlice';

interface CommentsListProps {}

export const CommentsList: React.FC<CommentsListProps> = () => {
  const comments = useAppSelector(selectComments);
  const isLoading = useAppSelector(selectColumnsIsLoading);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getComments());
  }, []);

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
        keyExtractor={item => `id:${item.id}`}
        refreshControl={
          <RefreshControl
            tintColor={PRIMARY_COLOR}
            refreshing={isLoading}
            onRefresh={() => dispatch(getComments())}
          />
        }
      />
    </View>
  );
};
