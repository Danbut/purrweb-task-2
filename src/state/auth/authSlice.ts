import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {Auth} from '../../services/api';
import {storage} from '../../services/storage';
import {RootState} from '../store';

interface AuthState {
  token: string | null;
  isLoading: boolean;
}

const initialState: AuthState = {
  token: null,
  isLoading: false,
};

export const signIn = createAsyncThunk(
  'auth/signin',
  (data: {email: string; password: string}, thunkAPI) =>
    Auth.signIn(data.email, data.password)
      .then(response => {
        thunkAPI.dispatch(setToken(response.token));
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
    Auth.signUp(data.name, data.email, data.password)
      .then(response => {
        thunkAPI.dispatch(setToken(response.token));
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

export const setToken = createAsyncThunk(
  'auth/setTokenToStorage',
  (token: string) => {
    storage.setToken(token);

    return token;
  },
);

export const removeToken = createAsyncThunk(
  'auth/removeTokenFromStorage',
  () => {
    storage.removeToken();
  },
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(setToken.fulfilled, (state, action) => {
      state.token = action.payload;
    });
    builder.addCase(getToken.fulfilled, (state, action) => {
      state.token = action.payload;
    });
    builder.addCase(removeToken.fulfilled, state => {
      state.token = null;
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
export const selectAuthIsLoading = (state: RootState) => state.auth.isLoading;

export default authSlice.reducer;
