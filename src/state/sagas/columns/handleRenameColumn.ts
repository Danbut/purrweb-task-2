import {call, put} from 'redux-saga/effects';
import {Api} from '../../../services/api';
import {setColumns} from '../../ducks/columns/columnsSlice';

export function* handleRenameColumn(action) {
  try {
    const {columnId, title} = action.payload;
    yield call(Api.columns.renameColumn, +columnId, title);
    const response = yield call(Api.columns.getColumns);
    yield put(setColumns(response));
  } catch (error) {
    console.log(error);
  }
}
