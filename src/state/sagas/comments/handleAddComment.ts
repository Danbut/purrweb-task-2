import {call, put} from 'redux-saga/effects';
import {Api} from '../../../services/api';
import {addComment} from '../../ducks/comments/commentsSlice';

export function* handleAddComment(action) {
  const {text, prayerId} = action.payload;
  try {
    const response = yield call(Api.comments.addComment, text, prayerId);
    yield put(addComment(response));
  } catch (error) {
    console.log(error);
  }
}
