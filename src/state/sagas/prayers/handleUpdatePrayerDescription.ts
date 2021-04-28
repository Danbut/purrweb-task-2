import {call, put} from 'redux-saga/effects';
import {Api} from '../../../services/api';
import {updatePrayer} from '../../ducks/prayers/prayersSlice';

export function* handleUpdatePrayerDescription(action) {
  const {description, id} = action.payload;
  try {
    const response = yield call(
      Api.prayers.updatePrayerDescription,
      description,
      id,
    );
    yield put(updatePrayer(response));
  } catch (error) {
    console.log(error);
  }
}
