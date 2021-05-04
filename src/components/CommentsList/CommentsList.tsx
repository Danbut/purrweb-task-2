import React, {useContext, useEffect} from 'react';
import {RefreshControl, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Comment} from '../Comment';
import {ListDivider, Subtitle} from '../../ui';
import {useAppDispatch, useAppSelector} from '../../state/hooks';
import {
  getComments,
  selectCommentsByPrayerId,
} from '../../state/ducks/comments/commentsSlice';
import {selectColumnsIsLoading} from '../../state/ducks/columns/columnsSlice';
import {RootState} from '../../state/store';

import styled, {ThemeContext} from 'styled-components/native';

interface CommentsListProps {
  prayerId: string;
}

export const CommentsList: React.FC<CommentsListProps> = ({prayerId}) => {
  const comments = useAppSelector((state: RootState) =>
    selectCommentsByPrayerId(state, prayerId),
  );

  const isLoading = useAppSelector(selectColumnsIsLoading);

  const dispatch = useAppDispatch();

  const theme = useContext(ThemeContext);

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
            tintColor={theme.colors.primary}
            refreshing={isLoading}
            onRefresh={() => dispatch(getComments())}
          />
        }
        ListEmptyComponent={
          <ListEmptyComponent>No comments</ListEmptyComponent>
        }
      />
    </View>
  );
};

const ListEmptyComponent = styled.Text`
  font-size: ${({theme}) => theme.size.secondary};
  color: ${({theme}) => theme.colors.text.primary};
  align-self: center;
  padding: ${({theme}) => theme.spaces.container}px;
`;
