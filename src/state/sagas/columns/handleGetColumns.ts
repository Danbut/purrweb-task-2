import {call, put} from 'redux-saga/effects';
import {Api} from '../../../services/api';
import {setColumns} from '../../columns/columnsSlice';

export function* handleGetColumns(action) {
  try {
    const response = yield call(Api.columns.getColumns);
    yield put(setColumns(response));
  } catch (error) {
    console.log(error);
  }
}
