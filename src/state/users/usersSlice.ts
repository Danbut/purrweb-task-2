import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

interface UsersState {
  users: IUser[];
}

const initialState: UsersState = {
  users: [],
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
  },
});

export const selectUsers = (state: RootState) => state.users.users;

export default usersSlice.reducer;
