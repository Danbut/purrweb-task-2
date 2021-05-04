import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import styled from 'styled-components/native';
import {sendComment} from '../../state/ducks/comments/commentsSlice';
import {Input} from '../../ui';
import {SendMessageIcon} from '../../ui/Icons/SendMessageIcon';

interface AddCommentProps {
  prayerId: string;
}

type AddCommentForm = {
  text: string;
};

export const AddComment: React.FC<AddCommentProps> = ({prayerId}) => {
  const {control, handleSubmit, setValue} = useForm<AddCommentForm>();
  const dispatch = useDispatch();

  const onSubmit = (data: AddCommentForm) => {
    dispatch(dispatch(sendComment({text: data.text, prayerId})));
    setValue('text', '');
  };

  return (
    <Container>
      <Controller
        control={control}
        render={({field: {value, onChange, ref}}) => (
          <Input
            ref={ref}
            value={value}
            onChangeText={onChange}
            icon={'message'}
            placeholder="Add a comment..."
            withBorder={false}
          />
        )}
        name="text"
      />
      <PaddingHorizontalContainer>
        <TouchableOpacity onPress={handleSubmit(onSubmit)}>
          <SendMessageIcon width={28} height={28} />
        </TouchableOpacity>
      </PaddingHorizontalContainer>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const PaddingHorizontalContainer = styled.View`
  padding-horizontal: ${({theme}) => theme.spaces.container};
`;
