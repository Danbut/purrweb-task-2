import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Animated, FlatList, RefreshControl, Text, View} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {
  CONTAINER_HORIZONTAL_PADDING,
  DANGER_COLOR,
  DEFAULT_SPACE,
  PRIMARY_COLOR,
  SECONDARY_TEXT_SIZE,
  styles,
} from '../../../assets';
import {useAppDispatch, useAppSelector} from '../../../state/hooks';
import {
  addPrayer,
  deletePrayer,
  getPrayers,
  selectCheckedPrayersByColumnId,
  selectPrayersByColumnId,
  selectPrayersIsLoading,
  selectUncheckedPrayersByColumnId,
} from '../../../state/ducks/prayers/prayersSlice';
import {RootState} from '../../../state/store';
import {Button, Input} from '../../../ui';
import {PrayerItem} from '../../../components/PrayerItem/PrayerItem';
import {ListDivider} from '../../../ui';
import {IColumn} from '../../../interfaces/IColumn';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';

interface CardsProps {
  column: IColumn;
}

//TODO: close if another open
const renderRightActions = (onPress, dragX) => {
  const trans = dragX.interpolate({
    inputRange: [0, 50],
    outputRange: [100, 150],
  });
  return (
    <TouchableOpacity onPress={onPress}>
      <Animated.View
        style={{
          backgroundColor: DANGER_COLOR,
          width: 100,
          height: '100%',
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
    </TouchableOpacity>
  );
};

const PrayerSwipableItem: React.FC<any> = ({item}) => {
  const dispatch = useDispatch();

  return (
    <Swipeable
      renderRightActions={(_, dragX) =>
        renderRightActions(() => {
          dispatch(deletePrayer({id: item.id}));
        }, dragX)
      }>
      <View
        style={{
          paddingHorizontal: CONTAINER_HORIZONTAL_PADDING,
        }}>
        <ListDivider>
          <PrayerItem prayer={item} />
        </ListDivider>
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
  const uncheckedPrayers = useAppSelector((state: RootState) =>
    selectUncheckedPrayersByColumnId(state, column.id),
  );
  const checkedPrayers = useAppSelector((state: RootState) =>
    selectCheckedPrayersByColumnId(state, column.id),
  );
  const isLoading = useAppSelector(selectPrayersIsLoading);

  const onSubmit = (data: AddPrayerForm) => {
    dispatch(addPrayer({...data, column: column.id}));
  };

  const [isShowAnsweredPrayers, setIsShowAnsweredPrayes] = useState(false);

  return (
    <ScrollView
      nestedScrollEnabled={true}
      style={{
        height: '100%',
        backgroundColor: '#ffffff',
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
              icon={'plus'}
              onPressIcon={handleSubmit(onSubmit)}
              placeholder="Add a prayer..."
            />
          )}
          name="title"
        />
      </View>
      <FlatList
        style={{flexGrow: 0}}
        data={uncheckedPrayers}
        renderItem={({item}) => <PrayerSwipableItem item={item} />}
        keyExtractor={item => `id:${item.id}`}
        scrollEnabled={false}
        refreshControl={
          <RefreshControl
            tintColor={PRIMARY_COLOR}
            refreshing={isLoading}
            onRefresh={() => dispatch(getPrayers())}
          />
        }
      />
      {checkedPrayers.length > 0 && (
        <Button
          style={{width: 300, alignSelf: 'center'}}
          onPress={() => setIsShowAnsweredPrayes(!isShowAnsweredPrayers)}>
          <Text
            style={[
              styles.button,
              {textTransform: 'uppercase', fontWeight: '500'},
            ]}>
            {isShowAnsweredPrayers
              ? 'Hide Answered Prayers'
              : 'Show Answered Prayers'}
          </Text>
        </Button>
      )}
      {isShowAnsweredPrayers && (
        <FlatList
          style={{flexGrow: 0}}
          data={checkedPrayers}
          ListHeaderComponent={ListDivider}
          renderItem={({item}) => <PrayerSwipableItem item={item} />}
          keyExtractor={item => `id:${item.id}`}
          scrollEnabled={false}
          refreshControl={
            <RefreshControl
              tintColor={PRIMARY_COLOR}
              refreshing={isLoading}
              onRefresh={() => dispatch(getPrayers())}
            />
          }
        />
      )}
    </ScrollView>
  );
};
