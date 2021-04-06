import {createSlice} from '@reduxjs/toolkit';
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
      state.columns = action.payload;
      state.isLoading = false;
    },
  },
});

export const selectColumns = (state: RootState) => state.columns.columns;
export const selectColumnsIsLoading = (state: RootState) =>
  state.columns.isLoading;

export const {setColumns, getColumns} = columnsSlice.actions;

export default columnsSlice.reducer;
