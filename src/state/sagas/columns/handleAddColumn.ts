import {call, put} from 'redux-saga/effects';
import {Api} from '../../../services/api';
import {setColumns} from '../../ducks/columns/columnsSlice';

export function* handleAddColumn(action) {
  try {
    yield call(Api.columns.addColumn);
    const response = yield call(Api.columns.getColumns);
    yield put(setColumns(response));
  } catch (error) {
    console.log(error);
  }
}
