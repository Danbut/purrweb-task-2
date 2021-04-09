import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Animated, FlatList, RefreshControl, Text, View} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {
  CONTAINER_HORIZONTAL_PADDING,
  DANGER_COLOR,
  LINE_COLOR,
  PRIMARY_COLOR,
  SECONDARY_TEXT_SIZE,
} from '../../../assets';
import {IColumn} from '../../../entities/Column';
import {useAppDispatch, useAppSelector} from '../../../state/hooks';
import {
  addPrayer,
  getPrayers,
  selectPrayersByColumnId,
  selectPrayersIsLoading,
} from '../../../state/prayers/prayersSlice';
import {RootState} from '../../../state/store';
import {Input} from '../../ui';
import {Prayer} from './Prayer/Prayer';

interface CardsProps {
  column: IColumn;
}

//TODO: close if another open
const renderRightActions = (_, dragX) => {
  const trans = dragX.interpolate({
    inputRange: [0, 50],
    outputRange: [100, 150],
  });
  return (
    <Animated.View
      style={{
        backgroundColor: DANGER_COLOR,
        width: 100,
        transform: [{translateX: trans}],
        justifyContent: 'center',
      }}>
      <Animated.Text
        style={[
          {
            color: '#ffffff',
            fontSize: SECONDARY_TEXT_SIZE,
            textAlign: 'center',
          },
          {
            transform: [{translateX: trans}],
          },
        ]}>
        Delete
      </Animated.Text>
    </Animated.View>
  );
};

const renderItem = ({item}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View
        style={{
          paddingHorizontal: CONTAINER_HORIZONTAL_PADDING,
        }}>
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: LINE_COLOR,
          }}>
          <Prayer prayer={item} />
        </View>
      </View>
    </Swipeable>
  );
};

type AddPrayerForm = {
  title: string;
};

export const Cards: React.FC<CardsProps> = ({column}) => {
  const {control, handleSubmit} = useForm<AddPrayerForm>();

  const dispatch = useAppDispatch();
  const prayers = useAppSelector((state: RootState) =>
    selectPrayersByColumnId(state, column.id),
  );
  const isLoading = useAppSelector(selectPrayersIsLoading);

  const onSubmit = (data: AddPrayerForm) => {
    dispatch(addPrayer({...data, column: column.id}));
  };

  return (
    <View
      style={{
        backgroundColor: '#ffffff',
        flex: 1,
        paddingVertical: CONTAINER_HORIZONTAL_PADDING,
      }}>
      <View style={{paddingHorizontal: CONTAINER_HORIZONTAL_PADDING}}>
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
      </View>
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
    </View>
  );
};
