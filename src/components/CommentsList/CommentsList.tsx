import React, {useEffect} from 'react';
import {RefreshControl, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {
  CONTAINER_HORIZONTAL_PADDING,
  PRIMARY_COLOR,
  styles,
} from '../../assets';
import {Comment} from '../Comment';
import {ListDivider, Subtitle} from '../../ui';
import {useAppDispatch, useAppSelector} from '../../state/hooks';
import {
  getComments,
  selectComments,
} from '../../state/ducks/comments/commentsSlice';
import {selectColumnsIsLoading} from '../../state/ducks/columns/columnsSlice';

interface CommentsListProps {
  prayerId: string;
}

export const CommentsList: React.FC<CommentsListProps> = () => {
  const comments = useAppSelector(selectComments);
  const isLoading = useAppSelector(selectColumnsIsLoading);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getComments());
  }, []);

  return (
    <View>
      <Subtitle>Comments</Subtitle>
      <FlatList
        data={comments}
        renderItem={({item}) => <Comment {...item} />}
        scrollEnabled={false}
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
        ListEmptyComponent={
          <Text
            style={[
              styles.cardSmallText,
              {alignSelf: 'center', padding: CONTAINER_HORIZONTAL_PADDING},
            ]}>
            No comments
          </Text>
        }
      />
    </View>
  );
};
