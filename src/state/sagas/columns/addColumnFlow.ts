import {Alert} from 'react-native';
import {call, put} from 'redux-saga/effects';
import {Api} from '../../../services/api';
import {setColumn} from '../../ducks/columns';

export function* addColumnFlow() {
  try {
    const response = yield call(Api.columns.addColumn);
    yield put(setColumn(response));
  } catch (error) {
    Alert.alert('Error', error.message);
  }
}
