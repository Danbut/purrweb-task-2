import {PayloadAction} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {call, put} from 'redux-saga/effects';
import {addCommentResponseTransformer} from '../../../dto';
import {Api} from '../../../services/api';
import {setComment} from '../../ducks/comments/commentsSlice';

export function* sendCommentFlow(
  action: PayloadAction<{
    text: string;
    prayerId: string;
  }>,
) {
  const {text, prayerId} = action.payload;
  try {
    const response = yield call(Api.comments.addComment, text, prayerId);
    yield put(setComment(addCommentResponseTransformer(response)));
  } catch (error) {
    Alert.alert('Error', error.message);
  }
}
