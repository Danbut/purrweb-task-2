import {Alert} from 'react-native';
import {call, put} from 'redux-saga/effects';
import {Api} from '../../../services/api';
import {setColumns} from '../../ducks/columns/columnsSlice';

export function* getColumnsFlow() {
  try {
    const response = yield call(Api.columns.getColumns);
    yield put(setColumns(response));
  } catch (error) {
    Alert.alert('Error', error.message);
  }
}
