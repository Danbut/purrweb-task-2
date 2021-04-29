import {call, put} from 'redux-saga/effects';
import {updatePrayerResponseTransformer} from '../../../dto';
import {Api} from '../../../services/api';
import {updatePrayer} from '../../ducks/prayers/prayersSlice';

export function* handleSetPrayerIsChecked(action) {
  const {isChecked, id} = action.payload;
  try {
    const response = yield call(Api.prayers.setPrayerIsChecked, isChecked, id);
    yield put(updatePrayer(updatePrayerResponseTransformer(response)));
  } catch (error) {
    console.log(error);
  }
}
