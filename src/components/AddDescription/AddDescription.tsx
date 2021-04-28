import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {CONTAINER_HORIZONTAL_PADDING} from '../../assets';
import {
  selectPrayerById,
  updatePrayerDescription,
} from '../../state/ducks/prayers/prayersSlice';
import {useAppSelector} from '../../state/hooks';
import {RootState} from '../../state/store';
import {CancelIcon, EditIcon, Input, SubmitIcon, Subtitle} from '../../ui';

interface AddDescriptionProps {
  prayerId: string;
}

type AddDescriptionForm = {
  description: string;
};

export const AddDescription: React.FC<AddDescriptionProps> = ({prayerId}) => {
  const {control, handleSubmit, setValue} = useForm<AddDescriptionForm>();
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const prayer = useAppSelector((state: RootState) =>
    selectPrayerById(state, prayerId),
  );

  const onSubmit = (data: AddDescriptionForm) => {
    if (prayer?.id) {
      dispatch(
        updatePrayerDescription({description: data.description, id: prayer.id}),
      );
    }
    setIsEditing(false);
  };

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Subtitle>Description</Subtitle>
        <TouchableOpacity
          style={{paddingHorizontal: CONTAINER_HORIZONTAL_PADDING}}
          onPress={() => {
            setIsEditing(true);
          }}>
          <EditIcon />
        </TouchableOpacity>
      </View>
      <View style={{paddingHorizontal: CONTAINER_HORIZONTAL_PADDING}}>
        <Controller
          control={control}
          render={({field: {value, onChange, ref}}) => (
            <Input
              withBorder={false}
              placeholder="Add description..."
              ref={ref}
              value={value}
              onChangeText={onChange}
              defaultValue={prayer?.description ?? ''}
              editable={isEditing}
            />
          )}
          name="description"
        />
        {isEditing && (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{paddingHorizontal: CONTAINER_HORIZONTAL_PADDING}}
              onPress={handleSubmit(onSubmit)}>
              <SubmitIcon />
            </TouchableOpacity>
            <TouchableOpacity
              style={{paddingHorizontal: CONTAINER_HORIZONTAL_PADDING}}
              onPress={() => {
                setValue('description', prayer?.description ?? '');
                setIsEditing(false);
              }}>
              <CancelIcon width={32} height={32} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </>
  );
};
