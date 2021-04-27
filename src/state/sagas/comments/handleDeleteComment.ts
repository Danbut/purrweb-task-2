import {call, put} from 'redux-saga/effects';
import {Api} from '../../../services/api';
import {removeComment} from '../../ducks/comments/commentsSlice';

export function* handleDeleteComment(action) {
  const {id} = action.payload;
  try {
    yield call(Api.comments.deleteComment, id);
    yield put(removeComment(id));
  } catch (error) {
    console.log(error);
  }
}
