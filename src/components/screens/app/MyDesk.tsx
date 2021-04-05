import React from 'react';
import {FlatList} from 'react-native';
import {selectColumns} from '../../../state/columns/columnsSlice';
import {useAppSelector} from '../../../state/hooks';
import {CONTAINER_HORIZONTAL_PADDING} from '../../assets/styles/spaces';
import {Container} from '../../ui/Container';

interface MyDeskProps {}

export const MyDesk: React.FC<MyDeskProps> = () => {
  const columns = useAppSelector(selectColumns);

  return (
    <Container padding={CONTAINER_HORIZONTAL_PADDING}>
      <FlatList></FlatList>
    </Container>
  );
};
