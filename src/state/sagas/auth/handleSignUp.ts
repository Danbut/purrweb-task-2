import {Alert} from 'react-native';
import {call, put} from 'redux-saga/effects';
import {IColumn} from '../../../interfaces/IColumn';
import {IUser} from '../../../interfaces/IUser';
import {Api} from '../../../services/api';
import {storage} from '../../../services/storage';
import {setToken, setUser} from '../../ducks/auth';
import {setColumns} from '../../ducks/columns';

export function* handleSignUp(action) {
  const {name, email, password} = action.payload;
  try {
    const response = yield call(Api.auth.signUp, name, email, password);
    yield put(setToken(response.token));
    yield call(storage.setToken.bind(storage), response.token);
    yield put(
      setUser({
        id: response.id,
        email: response.email,
        name: response.name,
      } as IUser),
    );
    yield put(
      setColumns(
        response.columns.map(({id, title}) => ({id, title})) as IColumn[],
      ),
    );
  } catch (error) {
    Alert.alert('Error', error.message);
  }
}
