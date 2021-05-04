import {PayloadAction} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {call, put} from 'redux-saga/effects';
import {updatePrayerResponseTransformer} from '../../../dto';
import {Api} from '../../../services/api';
import {updatePrayer} from '../../ducks/prayers/prayersSlice';

export function* setPrayerIsCheckedFlow(
  action: PayloadAction<{
    id: string;
    isChecked: boolean;
  }>,
) {
  const {isChecked, id} = action.payload;
  try {
    const response = yield call(Api.prayers.setPrayerIsChecked, isChecked, id);
    yield put(updatePrayer(updatePrayerResponseTransformer(response)));
  } catch (error) {
    Alert.alert('Error', error.message);
  }
}
