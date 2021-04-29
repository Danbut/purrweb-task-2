import {call, put} from 'redux-saga/effects';
import {getCommentResponseTransformer} from '../../../dto';
import {Api} from '../../../services/api';
import {setComments} from '../../ducks/comments/commentsSlice';

export function* handleGetComments(action) {
  try {
    const response = yield call(Api.comments.getComments);
    yield put(setComments(response.map(c => getCommentResponseTransformer(c))));
  } catch (error) {
    console.log(error);
  }
}
