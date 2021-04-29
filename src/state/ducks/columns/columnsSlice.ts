import {ActionCreatorWithPayload, createSlice} from '@reduxjs/toolkit';
import {IColumn} from '../../../interfaces/IColumn';
import {RootState} from '../../store';

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
          return -1;
        }
        if (a.id < b.id) {
          return 1;
        }

        return 0;
      });
      state.isLoading = false;
    },
    renameColumn: state => {
      state.isLoading = true;
    },
    addColumn: state => {
      state.isLoading = true;
    },
  },
});

export const selectColumns = (state: RootState) => state.columns.columns;
export const selectColumnsIsLoading = (state: RootState) =>
  state.columns.isLoading;
export const selectColumnById = (state: RootState, columnId: string) =>
  state.columns.columns.find(c => columnId == c.id);

export const renameColumn: ActionCreatorWithPayload<{
  columnId: string;
  title: string;
}> = columnsSlice.actions.renameColumn;

export const {setColumns, getColumns, addColumn} = columnsSlice.actions;

export default columnsSlice.reducer;
