import {Alert} from 'react-native';
import {call, put} from 'redux-saga/effects';
import {Api} from '../../../services/api';
import {setPrayers} from '../../ducks/prayers/prayersSlice';

export function* getPrayersFlow() {
  try {
    const response = yield call(Api.prayers.getPrayers);
    yield put(setPrayers(response));
  } catch (error) {
    Alert.alert('Error', error.message);
  }
}
