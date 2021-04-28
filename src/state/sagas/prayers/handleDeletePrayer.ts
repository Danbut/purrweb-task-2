import {call} from 'redux-saga/effects';
import {Api} from '../../../services/api';

export function* handleDeletePrayer(action) {
  const {id} = action.payload;
  try {
    yield call(Api.prayers.deletePrayerById, id);
  } catch (error) {
    console.log(error);
  }
}
