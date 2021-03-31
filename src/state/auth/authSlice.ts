import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {storage} from '../../services/storage';
import {RootState} from '../store';

interface AuthState {
  token: string | null;
}

const initialState: AuthState = {
  token: null,
};

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
  },
});

export const selectToken = (state: RootState) => state.auth.token;

export default authSlice.reducer;
