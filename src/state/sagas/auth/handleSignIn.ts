import {Alert} from 'react-native';
import {call, put} from 'redux-saga/effects';
import {IUser} from '../../../interfaces/IUser';
import {Api} from '../../../services/api';
import {storage} from '../../../services/storage';
import {setToken, setUser} from '../../ducks/auth';

export function* handleSignIn(action) {
  const {email, password} = action.payload;
  try {
    const response = yield call(Api.auth.signIn, email, password);
    yield put(setToken(response.token));
    yield call(storage.setToken.bind(storage), response.token);
    yield put(
      setUser({
        id: response.id,
        email: response.email,
        name: response.name,
      } as IUser),
    );
  } catch (error) {
    Alert.alert('Error', error.message);
  }
}
