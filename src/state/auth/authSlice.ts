import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {Column, IColumn} from '../../entities/Column';
import {Api} from '../../services/api';
import {storage} from '../../services/storage';
import {setColumns} from '../columns/columnsSlice';
import {RootState} from '../store';

interface AuthState {
  token: string | null;
  isLoading: boolean;
  isPreload: boolean;
  name: string | null;
}

const initialState: AuthState = {
  token: null,
  isLoading: false,
  isPreload: false,
  name: null,
};

export const signIn = createAsyncThunk(
  'auth/signin',
  (data: {email: string; password: string}, thunkAPI) =>
    Api.auth
      .signIn(data.email, data.password)
      .then(response => {
        thunkAPI.dispatch(setToken(response.token));
        thunkAPI.dispatch(setName(response.name));
        return response;
      })
      .catch(error => {
        Alert.alert('Error:', error.message);
        return Promise.reject();
      }),
);

export const signUp = createAsyncThunk(
  'auth/signup',
  (data: {name: string; email: string; password: string}, thunkAPI) =>
    Api.auth
      .signUp(data.name, data.email, data.password)
      .then(response => {
        thunkAPI.dispatch(setToken(response.token));
        thunkAPI.dispatch(setName(response.name));
        thunkAPI.dispatch(
          setColumns(
            response.columns.map((c: IColumn) => new Column(c.id, c.title)),
          ),
        );
        return response;
      })
      .catch(error => {
        Alert.alert('Error:', error.message);
        return Promise.reject();
      }),
);

export const getToken = createAsyncThunk('auth/getTokenFromStorage', () => {
  return storage.getToken();
});

export const getName = createAsyncThunk('auth/getNameFromStorage', () => {
  return storage.getName();
});

export const setToken = createAsyncThunk(
  'auth/setTokenToStorage',
  (token: string) => {
    storage.setToken(token);

    return token;
  },
);

export const setName = createAsyncThunk(
  'auth/setNameToStorage',
  (name: string) => {
    storage.setName(name);

    return name;
  },
);

export const removeToken = createAsyncThunk(
  'auth/removeTokenFromStorage',
  () => {
    storage.removeToken();
  },
);

export const removeName = createAsyncThunk('auth/removeNameFromStorage', () => {
  storage.removeName();
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(setToken.fulfilled, (state, action) => {
      state.token = action.payload;
    });
    builder.addCase(setName.fulfilled, (state, action) => {
      state.token = action.payload;
    });
    builder.addCase(getToken.pending, state => {
      state.isPreload = true;
    });
    builder.addCase(getToken.rejected, state => {
      state.isPreload = true;
    });
    builder.addCase(getName.pending, state => {
      state.isPreload = true;
    });
    builder.addCase(getName.rejected, state => {
      state.isPreload = true;
    });
    builder.addCase(getToken.fulfilled, (state, action) => {
      state.token = action.payload;
      state.isPreload = false;
    });
    builder.addCase(removeToken.fulfilled, state => {
      state.token = null;
    });
    builder.addCase(getName.fulfilled, (state, action) => {
      state.token = action.payload;
      state.isPreload = false;
    });
    builder.addCase(removeName.fulfilled, state => {
      state.name = null;
    });
    builder.addCase(signIn.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(signUp.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(signIn.rejected, state => {
      state.isLoading = false;
    });
    builder.addCase(signUp.rejected, state => {
      state.isLoading = false;
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.isLoading = false;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.isLoading = false;
    });
  },
});

export const selectToken = (state: RootState) => state.auth.token;
export const selectName = (state: RootState) => state.auth.name;
export const selectAuthIsLoading = (state: RootState) => state.auth.isLoading;
export const selectAuthIsPreload = (state: RootState) => state.auth.isPreload;

export default authSlice.reducer;
