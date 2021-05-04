import React, {useState} from 'react';
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
import {useController, useForm} from 'react-hook-form';
import styled from 'styled-components/native';

interface CommentProps {
  createdAt: string;
  text: string;
  id: string;
}

type EditCommentForm = {
  text: string;
};

export const Comment: React.FC<CommentProps> = ({createdAt, text, id}) => {
  const {control, handleSubmit, setValue} = useForm<EditCommentForm>();
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
    <Container>
      <Avatar></Avatar>
      <CommentContainer>
        <AuthorContainer>
          <Author>{name}</Author>
          <CreatedAt>{getDisplayCommentDate(createdAt)}</CreatedAt>
        </AuthorContainer>
        <MessageContainer>
          <Input
            withBorder={false}
            ref={ref}
            value={value}
            onChangeText={onChange}
            defaultValue={text}
            editable={isEditing}
            padding={0}
          />
          <IconContainer>
            <TouchableOpacity
              onPress={() => {
                setIsEditing(true);
              }}>
              <EditIcon />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => dispatch(deleteComment({id}))}>
              <DeleteIcon width={24} height={24} />
            </TouchableOpacity>
          </IconContainer>
        </MessageContainer>
        {isEditing && (
          <EditButtonsContainer>
            <PaddingHorizontalButton onPress={handleSubmit(onSubmit)}>
              <SubmitIcon />
            </PaddingHorizontalButton>
            <PaddingHorizontalButton
              onPress={() => {
                setValue('text', text);
                setIsEditing(false);
              }}>
              <CancelIcon width={32} height={32} />
            </PaddingHorizontalButton>
          </EditButtonsContainer>
        )}
      </CommentContainer>
    </Container>
  );
};

const Container = styled.View`
  padding: ${({theme}) => theme.spaces.container}px;
  flex-direction: row;
`;

const CommentContainer = styled.View`
  padding-left: ${({theme}) => theme.spaces.container};
  flex: 1;
`;

const AuthorContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Author = styled.Text`
  font-size: ${({theme}) => theme.size.primary};
  color: ${({theme}) => theme.colors.text.primary};
  font-weight: 600;
`;

const CreatedAt = styled.Text`
  font-size: ${({theme}) => theme.size.secondary};
  color: ${({theme}) => theme.colors.text.secondary};
  padding-left: ${({theme}) => theme.spaces.small};
`;

const MessageContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const IconContainer = styled.View`
  flex-direction: row;
`;

const EditButtonsContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const PaddingHorizontalButton = styled.TouchableOpacity`
  padding-horizontal: ${({theme}) => theme.spaces.container};
`;
