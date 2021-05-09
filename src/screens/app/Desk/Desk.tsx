import React, {useContext, useEffect} from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {
  getColumns,
  selectColumns,
  selectColumnsIsLoading,
} from '../../../state/ducks/columns/columnsSlice';
import {useAppDispatch, useAppSelector} from '../../../state/hooks';
import {Container} from '../../../ui';
import {Column} from '../../../components/Column';
import {getPrayers} from '../../../state/ducks/prayers/prayersSlice';
import {ThemeContext} from 'styled-components/native';

interface DeskProps {}

const renderItem = ({item}) => {
  return <Column column={item}></Column>;
};

export const Desk: React.FC<DeskProps> = () => {
  const columns = useAppSelector(selectColumns);
  const isLoading = useAppSelector(selectColumnsIsLoading);
  const dispatch = useAppDispatch();
  const theme = useContext(ThemeContext);
  useEffect(() => {
    dispatch(getColumns());
    dispatch(getPrayers());
  }, []);

  return (
    <Container padding={theme.spaces.container}>
      <FlatList
        data={columns}
        renderItem={renderItem}
        keyExtractor={item => `id:${item.id}`}
        refreshControl={
          <RefreshControl
            tintColor={theme.colors.primary}
            refreshing={isLoading}
            onRefresh={() => dispatch(getColumns())}
          />
        }
      />
    </Container>
  );
};
