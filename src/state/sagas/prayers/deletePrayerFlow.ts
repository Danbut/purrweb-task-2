import {PayloadAction} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {call, put} from 'redux-saga/effects';
import {Api} from '../../../services/api';
import {removePrayer} from '../../ducks/prayers';

export function* deletePrayerFlow(
  action: PayloadAction<{
    id: string;
  }>,
) {
  const {id} = action.payload;
  try {
    yield call(Api.prayers.deletePrayerById, id);
    yield put(removePrayer({id}));
  } catch (error) {
    Alert.alert('Error', error.message);
  }
}
