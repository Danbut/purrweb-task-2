import {call, put} from 'redux-saga/effects';
import {Api} from '../../../services/api';
import {setPrayers} from '../../ducks/prayers/prayersSlice';

export function* handleGetPrayers(action) {
  try {
    const response = yield call(Api.prayers.getPrayers);
    yield put(setPrayers(response));
  } catch (error) {
    console.log(error);
  }
}
