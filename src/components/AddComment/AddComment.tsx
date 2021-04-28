import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {CONTAINER_HORIZONTAL_PADDING} from '../../assets';
import {sendComment} from '../../state/ducks/comments/commentsSlice';
import {Input} from '../../ui';
import {SendMessage} from '../../ui/Icons/Delete';

interface AddCommentProps {
  prayerId: string;
}

type AddCommentForm = {
  text: string;
};

export const AddComment: React.FC<AddCommentProps> = ({prayerId}) => {
  const {control, handleSubmit} = useForm<AddCommentForm>();
  const dispatch = useDispatch();

  const onSubmit = (data: AddCommentForm) => {
    dispatch(dispatch(sendComment({text: data.text, prayerId})));
  };

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
            style={{flex: 0.8}}
          />
        )}
        name="text"
      />
      <View
        style={{paddingHorizontal: CONTAINER_HORIZONTAL_PADDING, flex: 0.2}}>
        <TouchableOpacity onPress={handleSubmit(onSubmit)}>
          <SendMessage width={28} height={28} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
