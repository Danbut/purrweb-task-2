import {PayloadAction} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {call, put} from 'redux-saga/effects';
import {updatePrayerResponseTransformer} from '../../../dto';
import {Api} from '../../../services/api';
import {updatePrayer} from '../../ducks/prayers/prayersSlice';

export function* editPrayerTitleFlow(
  action: PayloadAction<{
    id: string;
    title: string;
  }>,
) {
  const {title, id} = action.payload;
  try {
    const response = yield call(Api.prayers.editPrayerTitle, title, id);
    yield put(updatePrayer(updatePrayerResponseTransformer(response)));
  } catch (error) {
    Alert.alert('Error', error.message);
  }
}
