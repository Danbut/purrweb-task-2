import {call, put} from 'redux-saga/effects';
import {Api} from '../../../services/api';
import {updateComment} from '../../ducks/comments/commentsSlice';

export function* handleEditComment(action) {
  const {text, id} = action.payload;
  try {
    const response = yield call(Api.comments.editComment, text, id);
    yield put(updateComment(response));
  } catch (error) {
    console.log(error);
  }
}
