import {PayloadAction} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {call, put} from 'redux-saga/effects';
import {Api} from '../../../services/api';
import {removeComment} from '../../ducks/comments';

export function* deleteCommentFlow(
  action: PayloadAction<{
    id: string;
  }>,
) {
  const {id} = action.payload;
  try {
    yield call(Api.comments.deleteComment, id);
    yield put(removeComment(id));
  } catch (error) {
    Alert.alert('Error', error.message);
  }
}
