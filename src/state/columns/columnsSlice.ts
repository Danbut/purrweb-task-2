import {ActionCreatorWithPayload, createSlice} from '@reduxjs/toolkit';
import {IColumn} from '../../entities/Column';
import {RootState} from '../store';

interface ColumnsState {
  columns: IColumn[];
  isLoading: boolean;
}

const initialState: ColumnsState = {
  columns: [],
  isLoading: false,
};

export const columnsSlice = createSlice({
  name: 'Columns',
  initialState,
  reducers: {
    getColumns: state => {
      state.isLoading = true;
    },
    setColumns: (state, action) => {
      state.columns = action.payload.sort((a, b) => {
        if (a.id > b.id) {
          return 1;
        }
        if (a.id < b.id) {
          return -1;
        }

        return 0;
      });
      state.isLoading = false;
    },
    renameColumn: () => {},
  },
});

export const selectColumns = (state: RootState) => state.columns.columns;
export const selectColumnsIsLoading = (state: RootState) =>
  state.columns.isLoading;

export const renameColumn: ActionCreatorWithPayload<{
  columnId: string;
  title: string;
}> = columnsSlice.actions.renameColumn;

export const {setColumns, getColumns} = columnsSlice.actions;

export default columnsSlice.reducer;
