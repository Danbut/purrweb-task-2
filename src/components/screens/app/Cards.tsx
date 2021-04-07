import {useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {FlatList, RefreshControl, Text} from 'react-native';
// import {FlatList} from 'react-native-gesture-handler';
// import SwipeableItem from 'react-native-swipeable-item';
import {CONTAINER_HORIZONTAL_PADDING, PRIMARY_COLOR} from '../../../assets';
import {IColumn} from '../../../entities/Column';
import {useAppDispatch, useAppSelector} from '../../../state/hooks';
import {
  addPrayer,
  getPrayers,
  selectPrayers,
  selectPrayersIsLoading,
} from '../../../state/prayers/prayersSlice';
import {Container} from '../../ui';
import {Input} from '../../ui';

interface CardsProps {}

// const renderItem = () => {
//   return (
//     <SwipeableItem
//       key={item.key}
//       item={item}
//       ref={ref => {
//         if (ref && !this.itemRefs.get(item.key)) {
//           this.itemRefs.set(item.key, ref);
//         }
//       }}
//       onChange={({open}) => {
//         if (open) {
//           // Close all other open items
//           [...this.itemRefs.entries()].forEach(([key, ref]) => {
//             if (key !== item.key && ref) ref.close();
//           });
//         }
//       }}
//       overSwipe={20}
//       renderUnderlayRight={this.renderUnderlayRight}
//       snapPointsRight={[175]}></SwipeableItem>
//   );
// };

const renderItem = ({item}) => {
  return <Text>{item.title}</Text>;
};

type AddPrayerForm = {
  title: string;
};

export const Cards: React.FC<CardsProps> = () => {
  //TODO: фигня с этими преерами какая-то, нужно на фронте выбирать их колонки
  const {control, handleSubmit} = useForm<AddPrayerForm>();
  const route = useRoute();

  const dispatch = useAppDispatch();
  const prayers = useAppSelector(selectPrayers);
  const isLoading = useAppSelector(selectPrayersIsLoading);

  useEffect(() => {
    dispatch(getPrayers());
  }, []);

  const onSubmit = (data: AddPrayerForm) => {
    dispatch(addPrayer({...data, column: {...(route.params as IColumn)}}));
  };

  return (
    <Container padding={CONTAINER_HORIZONTAL_PADDING}>
      <Controller
        control={control}
        render={({field: {value, onChange, ref}}) => (
          <Input
            ref={ref}
            value={value}
            onChangeText={onChange}
            icon
            iconOnPress={handleSubmit(onSubmit)}
            placeholder="Add a prayer..."
          />
        )}
        name="title"
      />
      <FlatList
        data={prayers}
        renderItem={renderItem}
        keyExtractor={item => `id:${item.id}`}
        refreshControl={
          <RefreshControl
            tintColor={PRIMARY_COLOR}
            refreshing={isLoading}
            onRefresh={() => dispatch(getPrayers())}
          />
        }
      />
    </Container>
  );
};
