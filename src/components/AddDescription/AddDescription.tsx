import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import styled from 'styled-components/native';
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
      <Container>
        <Subtitle>Description</Subtitle>
        <PaddingHorizontalButton
          onPress={() => {
            setIsEditing(true);
          }}>
          <EditIcon />
        </PaddingHorizontalButton>
      </Container>
      <PaddingHorizontalContainer>
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
          <EditButtonsContainer>
            <PaddingHorizontalButton onPress={handleSubmit(onSubmit)}>
              <SubmitIcon />
            </PaddingHorizontalButton>
            <PaddingHorizontalButton
              onPress={() => {
                setValue('description', prayer?.description ?? '');
                setIsEditing(false);
              }}>
              <CancelIcon width={32} height={32} />
            </PaddingHorizontalButton>
          </EditButtonsContainer>
        )}
      </PaddingHorizontalContainer>
    </>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const EditButtonsContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const PaddingHorizontalContainer = styled.View`
  padding-horizontal: ${({theme}) => theme.spaces.container};
`;

const PaddingHorizontalButton = styled.TouchableOpacity`
  padding-horizontal: ${({theme}) => theme.spaces.container};
`;
