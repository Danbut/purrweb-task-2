import {call, put} from 'redux-saga/effects';
import {IComment} from '../../../interfaces/IComment';
import {Api} from '../../../services/api';
import {addComment} from '../../ducks/comments/commentsSlice';

export function* handleAddComment(action) {
  const {text, prayerId} = action.payload;
  try {
    const {id, card, body, userId, created} = yield call(
      Api.comments.addComment,
      text,
      prayerId,
    );
    yield put(
      addComment({
        id,
        prayerId: card.id,
        text: body,
        createdAt: created,
        userId,
      } as IComment),
    );
  } catch (error) {
    console.log(error);
  }
}
