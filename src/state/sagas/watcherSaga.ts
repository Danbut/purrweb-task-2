import {takeLatest} from 'redux-saga/effects';
import {getColumns, renameColumn} from '../columns/columnsSlice';
import {handleGetColumns} from './columns/handleGetColumns';
import {handleRenameColumn} from './columns/handleRenameColumn';

export function* watcherSaga() {
  yield takeLatest(getColumns.type, handleGetColumns);
  yield takeLatest(renameColumn.type, handleRenameColumn);
}
