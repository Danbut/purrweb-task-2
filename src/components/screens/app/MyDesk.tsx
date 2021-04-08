import React, {useEffect} from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {
  getColumns,
  selectColumns,
  selectColumnsIsLoading,
} from '../../../state/columns/columnsSlice';
import {useAppDispatch, useAppSelector} from '../../../state/hooks';
import {PRIMARY_COLOR, CONTAINER_HORIZONTAL_PADDING} from '../../../assets';
import {Container} from '../../ui';
import {Column} from './Column';
import {getPrayers} from '../../../state/prayers/prayersSlice';

interface MyDeskProps {}

const renderItem = ({item}) => {
  return <Column column={item}></Column>;
};

export const MyDesk: React.FC<MyDeskProps> = () => {
  const columns = useAppSelector(selectColumns);
  const isLoading = useAppSelector(selectColumnsIsLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getColumns());
    dispatch(getPrayers());
  }, []);

  return (
    <Container padding={CONTAINER_HORIZONTAL_PADDING}>
      <FlatList
        data={columns}
        renderItem={renderItem}
        keyExtractor={item => `id:${item.id}`}
        refreshControl={
          <RefreshControl
            tintColor={PRIMARY_COLOR}
            refreshing={isLoading}
            onRefresh={() => dispatch(getColumns())}
          />
        }
      />
    </Container>
  );
};
