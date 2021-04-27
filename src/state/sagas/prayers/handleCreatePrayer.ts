import {call, put} from 'redux-saga/effects';
import {Api} from '../../../services/api';
import {setPrayers} from '../../ducks/prayers/prayersSlice';

export function* handleCreatePrayer(action) {
  const {title, column} = action.payload;
  try {
    yield call(Api.prayers.createPrayer, title, column);
    const response = yield call(Api.prayers.getPrayers);
    yield put(setPrayers(response));
  } catch (error) {
    console.log(error);
  }
}
