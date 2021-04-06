import {takeLatest} from 'redux-saga/effects';
import {addColumn, getColumns, renameColumn} from '../columns/columnsSlice';
import {handleAddColumn} from './columns/handleAddColumn';
import {handleGetColumns} from './columns/handleGetColumns';
import {handleRenameColumn} from './columns/handleRenameColumn';

export function* watcherSaga() {
  yield takeLatest(getColumns.type, handleGetColumns);
  yield takeLatest(renameColumn.type, handleRenameColumn);
  yield takeLatest(addColumn.type, handleAddColumn);
}
