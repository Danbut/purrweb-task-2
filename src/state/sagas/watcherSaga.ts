import {takeLatest} from 'redux-saga/effects';
import {getColumns} from '../columns/columnsSlice';
import {handleGetColumns} from './columns/handleGetColumns';

export function* watcherSaga() {
  yield takeLatest(getColumns.type, handleGetColumns);
}
