import {ActionCreatorWithPayload, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../store';
import {IUser} from '../../../interfaces/IUser';

interface AuthState {
  token: string | null;
  isLoading: boolean;
  user: IUser | null;
}

const initialState: AuthState = {
  token: null,
  isLoading: false,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    logout: state => {
      state.token = null;
      state.user = null;
    },
    signIn: state => {
      state.isLoading = true;
    },
    signUp: state => {
      state.isLoading = true;
    },
  },
});

export const {setUser, setToken, logout} = authSlice.actions;

export const signIn: ActionCreatorWithPayload<{
  email: string;
  password: string;
}> = authSlice.actions.signIn;

export const signUp: ActionCreatorWithPayload<{
  name: string;
  email: string;
  password: string;
}> = authSlice.actions.signUp;

export const selectToken = (state: RootState) => state.auth.token;
export const selectName = (state: RootState) => state.auth.user?.name;
export const selectAuthIsLoading = (state: RootState) => state.auth.isLoading;
export const selectAuthIsPreload = (state: RootState) => state.auth.isPreload;

export default authSlice.reducer;
