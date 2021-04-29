import {call} from 'redux-saga/effects';
import {Api} from '../../../services/api';

export function* handleDeleteComment(action) {
  const {id} = action.payload;
  try {
    yield call(Api.comments.deleteComment, id);
  } catch (error) {
    console.log(error);
  }
}
