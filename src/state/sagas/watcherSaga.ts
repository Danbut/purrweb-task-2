import {takeLatest} from 'redux-saga/effects';
import {addColumn, getColumns, renameColumn} from '../columns/columnsSlice';
import {addPrayer, getPrayers} from '../prayers/prayersSlice';
import {handleAddColumn} from './columns/handleAddColumn';
import {handleGetColumns} from './columns/handleGetColumns';
import {handleRenameColumn} from './columns/handleRenameColumn';
import {handleCreatePrayer} from './prayers/handleCreatePrayer';
import {handleGetPrayers} from './prayers/handleGetPrayers';

export function* watcherSaga() {
  yield takeLatest(getColumns.type, handleGetColumns);
  yield takeLatest(renameColumn.type, handleRenameColumn);
  yield takeLatest(addColumn.type, handleAddColumn);
  yield takeLatest(getPrayers.type, handleGetPrayers);
  yield takeLatest(addPrayer.type, handleCreatePrayer);
}
