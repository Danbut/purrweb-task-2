import {Alert} from 'react-native';
import {call} from 'redux-saga/effects';
import {storage} from '../../../services/storage';

export function* logoutFlow() {
  try {
    yield call(storage.removeToken.bind(storage));
  } catch (error) {
    Alert.alert('Error', error.message);
  }
}
