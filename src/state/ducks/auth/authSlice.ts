import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../store';
import {IUser} from '../../../interfaces/IUser';

interface AuthState {
  token: string | null;
  isLoading: boolean;
  isPreload: boolean;
  user: IUser | null;
}

const initialState: AuthState = {
  token: null,
  isLoading: false,
  isPreload: false,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    signIn: () => {},
    signUp: () => {},
    logout: state => {
      state.token = null;
      state.user = null;
    },
  },
});

export const {setUser, setToken, signIn, signUp, logout} = authSlice.actions;

export const selectToken = (state: RootState) => state.auth.token;
export const selectName = (state: RootState) => state.auth.user?.name;
export const selectAuthIsLoading = (state: RootState) => state.auth.isLoading;
export const selectAuthIsPreload = (state: RootState) => state.auth.isPreload;

export default authSlice.reducer;
