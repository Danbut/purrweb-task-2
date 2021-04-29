import React, {useRef, useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {
  CONTAINER_HORIZONTAL_PADDING,
  PRIMARY_TEXT_COLOR,
  PRIMARY_TEXT_SIZE,
  SECONDARY_TEXT_COLOR,
  SECONDARY_TEXT_SIZE,
  SMALL_SPACE,
} from '../../assets';
import {selectName} from '../../state/ducks/auth';
import {useAppDispatch, useAppSelector} from '../../state/hooks';
import {getDisplayCommentDate} from '../../utils/getDisplayCommentDate';
import {Avatar} from '../../ui/Avatar';
import {CancelIcon, DeleteIcon, EditIcon, Input, SubmitIcon} from '../../ui';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  deleteComment,
  editComment,
} from '../../state/ducks/comments/commentsSlice';
import {Controller, useController, useForm} from 'react-hook-form';

interface CommentProps {
  createdAt: string;
  text: string;
  id: string;
}

type EditCommentForm = {
  text: string;
};

export const Comment: React.FC<CommentProps> = ({createdAt, text, id}) => {
  const {
    control,
    handleSubmit,
    setValue,
    register,
  } = useForm<EditCommentForm>();
  const dispatch = useAppDispatch();
  const name = useAppSelector(selectName);
  const [isEditing, setIsEditing] = useState(false);
  const {
    field: {value, onChange, ref},
  } = useController({name: 'text', control: control});

  const onSubmit = (data: EditCommentForm) => {
    dispatch(editComment({id, text: data.text}));
    setIsEditing(false);
  };

  return (
    <View
      style={{
        padding: CONTAINER_HORIZONTAL_PADDING,
        flexDirection: 'row',
      }}>
      <Avatar></Avatar>
      <View
        style={{
          paddingLeft: CONTAINER_HORIZONTAL_PADDING,

          flex: 1,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              fontSize: PRIMARY_TEXT_SIZE,
              color: PRIMARY_TEXT_COLOR,
              fontWeight: '600',
            }}>
            {name}
          </Text>
          <Text
            style={{
              fontSize: SECONDARY_TEXT_SIZE,
              color: SECONDARY_TEXT_COLOR,
              paddingLeft: SMALL_SPACE,
            }}>
            {getDisplayCommentDate(createdAt)}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Input
            withBorder={false}
            ref={ref}
            value={value}
            onChangeText={onChange}
            defaultValue={text}
            editable={isEditing}
            padding={0}
          />

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => {
                setIsEditing(true);
              }}>
              <EditIcon />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => dispatch(deleteComment({id}))}>
              <DeleteIcon width={24} height={24} />
            </TouchableOpacity>
          </View>
        </View>
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
                setValue('text', text);
                setIsEditing(false);
              }}>
              <CancelIcon width={32} height={32} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};
