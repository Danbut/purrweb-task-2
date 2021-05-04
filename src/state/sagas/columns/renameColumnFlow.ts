import {PayloadAction} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {call, put} from 'redux-saga/effects';
import {Api} from '../../../services/api';
import {setColumn} from '../../ducks/columns';

export function* renameColumnFlow(
  action: PayloadAction<{columnId: string; title: string}>,
) {
  try {
    const {columnId, title} = action.payload;
    const response = yield call(Api.columns.renameColumn, columnId, title);
    yield put(setColumn(response));
  } catch (error) {
    Alert.alert('Error', error.message);
  }
}
