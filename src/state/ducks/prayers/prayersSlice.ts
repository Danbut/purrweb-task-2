import {ActionCreatorWithPayload, createSlice} from '@reduxjs/toolkit';
import {IPrayer} from '../../../interfaces/IPrayer';
import {RootState} from '../../store';

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
      state.prayers = action.payload.map(
        p =>
          ({
            id: p.id.toString(),
            title: p.title,
            description: p.description,
            isChecked: p.checked,
            columnId: p.columnId.toString(),
            commentsIds: p.commentsIds.map(id => id.toString()),
          } as IPrayer),
      );
      state.isLoading = false;
    },
    addPrayer: state => {
      state.isLoading = true;
    },
    updatePrayer: (state, action) => {
      state.prayers = state.prayers.map(p => {
        if (action.payload.id === p.id) {
          return action.payload;
        } else {
          return p;
        }
      });
    },
    deletePrayer: (state, action) => {
      state.prayers = state.prayers.filter(p => action.payload.id !== p.id);
    },
    editPrayerTitle: () => {},
  },
});

export const addPrayer: ActionCreatorWithPayload<{
  title: string;
  column: string;
}> = prayersSlice.actions.addPrayer;

export const updatePrayerDescription: ActionCreatorWithPayload<{
  description: string;
  id: string;
}> = prayersSlice.actions.addPrayer;
export const deletePrayer: ActionCreatorWithPayload<{
  id: string;
}> = prayersSlice.actions.deletePrayer;
export const editPrayerTitle: ActionCreatorWithPayload<{
  id: string;
  title: string;
}> = prayersSlice.actions.editPrayerTitle;

export const selectPrayers = (state: RootState) => state.prayers.prayers;
export const selectPrayersIsLoading = (state: RootState) =>
  state.prayers.isLoading;
export const selectPrayersByColumnId = (state: RootState, columnId: string) =>
  state.prayers.prayers.filter(p => columnId == p.columnId);
export const selectPrayerById = (state: RootState, prayerId: string) =>
  state.prayers.prayers.find(p => prayerId == p.id);
export const {setPrayers, getPrayers, updatePrayer} = prayersSlice.actions;

export const selectCommentsIdsByPrayerId = (
  state: RootState,
  prayerId: string,
) => state.prayers.prayers.find(p => prayerId == p.id)?.commentsIds ?? [];

export default prayersSlice.reducer;
