import {call, put} from 'redux-saga/effects';
import {Api} from '../../../services/api';
import {setComments} from '../../ducks/comments/commentsSlice';

export function* handleGetComments(action) {
  try {
    const response = yield call(Api.comments.getComments);
    yield put(setComments(response));
  } catch (error) {
    console.log(error);
  }
}
