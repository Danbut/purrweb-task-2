import {ActionCreatorWithPayload, createSlice} from '@reduxjs/toolkit';
import {IColumn} from '../../entities/Column';
import {IPrayer} from '../../entities/Prayer';
import {RootState} from '../store';

interface PrayersState {
  prayers: IPrayer[];
  isLoading: boolean;
}

const initialState: PrayersState = {
  prayers: [],
  isLoading: false,
};

export const prayersSlice = createSlice({
  name: 'prayers',
  initialState,
  reducers: {
    getPrayers: state => {
      state.isLoading = true;
    },
    setPrayers: (state, action) => {
      state.prayers = action.payload;
      state.isLoading = false;
    },
    addPrayer: state => {
      state.isLoading = true;
    },
  },
});

export const addPrayer: ActionCreatorWithPayload<{
  title: string;
  column: IColumn;
}> = prayersSlice.actions.addPrayer;

export const selectPrayers = (state: RootState) => state.prayers.prayers;
export const selectPrayersIsLoading = (state: RootState) =>
  state.prayers.isLoading;

export const {setPrayers, getPrayers} = prayersSlice.actions;

export default prayersSlice.reducer;
