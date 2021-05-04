import React, {useContext, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Animated, FlatList, RefreshControl, View} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {useAppDispatch, useAppSelector} from '../../../state/hooks';
import {
  addPrayer,
  deletePrayer,
  getPrayers,
  selectCheckedPrayersByColumnId,
  selectPrayersIsLoading,
  selectUncheckedPrayersByColumnId,
} from '../../../state/ducks/prayers/prayersSlice';
import {RootState} from '../../../state/store';
import {Button, Input} from '../../../ui';
import {PrayerItem} from '../../../components/PrayerItem/PrayerItem';
import {ListDivider} from '../../../ui';
import {IColumn} from '../../../interfaces/IColumn';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import styled, {ThemeContext} from 'styled-components/native';

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
      <DeleteButton style={{transform: [{translateX: trans}]}}>
        <DeleteButtonText style={{transform: [{translateX: trans}]}}>
          Delete
        </DeleteButtonText>
      </DeleteButton>
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
      <PaddingHorizontalContainer>
        <ListDivider>
          <PrayerItem prayer={item} />
        </ListDivider>
      </PaddingHorizontalContainer>
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

  const theme = useContext(ThemeContext);

  const [isShowAnsweredPrayers, setIsShowAnsweredPrayes] = useState(false);

  return (
    <Container nestedScrollEnabled={true}>
      <PaddingHorizontalContainer>
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
      </PaddingHorizontalContainer>
      <FlatList
        style={{flexGrow: 0}}
        data={uncheckedPrayers}
        renderItem={({item}) => <PrayerSwipableItem item={item} />}
        keyExtractor={item => `id:${item.id}`}
        scrollEnabled={false}
        refreshControl={
          <RefreshControl
            tintColor={theme.colors.primary}
            refreshing={isLoading}
            onRefresh={() => dispatch(getPrayers())}
          />
        }
      />
      {checkedPrayers.length > 0 && (
        <Button
          style={{width: 300, alignSelf: 'center'}}
          onPress={() => setIsShowAnsweredPrayes(!isShowAnsweredPrayers)}>
          <ButtonText>
            {isShowAnsweredPrayers
              ? 'Hide Answered Prayers'
              : 'Show Answered Prayers'}
          </ButtonText>
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
              tintColor={theme.colors.primary}
              refreshing={isLoading}
              onRefresh={() => dispatch(getPrayers())}
            />
          }
        />
      )}
    </Container>
  );
};

const Container = styled.ScrollView`
  height: 100%;
  background-color: ${({theme}) => theme.colors.white};
  padding-vertical: ${({theme}) => theme.spaces.container};
`;

// const PaddingHorizontalContainer = styled.View`
//   padding-horizontal: ${({theme}) => theme.spaces.container};
// `;

const ButtonText = styled.Text`
  color: ${({theme}) => theme.colors.white};
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
`;

const DeleteButton = styled(Animated.View)`
  background-color: ${({theme}) => theme.colors.danger};
  width: 100;
  height: 100%;
  justify-content: center;
`;

const DeleteButtonText = styled(Animated.Text)`
  color: ${({theme}) => theme.colors.white};
  font-size: ${({theme}) => theme.size.secondary};
  text-align: center;
`;

const PaddingHorizontalContainer = styled.View`
  padding-horizontal: ${({theme}) => theme.spaces.container};
`;
