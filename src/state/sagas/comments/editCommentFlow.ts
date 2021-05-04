import {PayloadAction} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {call, put} from 'redux-saga/effects';
import {getCommentResponseTransformer} from '../../../dto';
import {Api} from '../../../services/api';
import {updateComment} from '../../ducks/comments';

export function* editCommentFlow(
  action: PayloadAction<{
    id: string;
    text: string;
  }>,
) {
  const {text, id} = action.payload;
  try {
    const response = yield call(Api.comments.editComment, text, id);
    yield put(updateComment(getCommentResponseTransformer(response)));
  } catch (error) {
    Alert.alert('Error', error.message);
  }
}
