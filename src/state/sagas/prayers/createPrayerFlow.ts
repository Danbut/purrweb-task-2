import {PayloadAction} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {call, put} from 'redux-saga/effects';
import {Api} from '../../../services/api';
import {setPrayers} from '../../ducks/prayers/prayersSlice';

export function* createPrayerFlow(
  action: PayloadAction<{
    title: string;
    column: string;
  }>,
) {
  const {title, column} = action.payload;
  try {
    yield call(Api.prayers.createPrayer, title, column);
    const response = yield call(Api.prayers.getPrayers);
    yield put(setPrayers(response));
  } catch (error) {
    Alert.alert('Error', error.message);
  }
}
