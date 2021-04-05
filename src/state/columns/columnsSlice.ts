import {createSlice} from '@reduxjs/toolkit';
import {IColumn} from '../../entities/Column';
import {RootState} from '../store';

interface ColumnsState {
  columns: IColumn[];
}

const initialState: ColumnsState = {
  columns: [],
};

export const columnsSlice = createSlice({
  name: 'Columns',
  initialState,
  reducers: {
    setColumns: (state, action) => {
      state.columns = action.payload;
    },
  },
});

export const selectColumns = (state: RootState) => state.columns.columns;

export const {setColumns} = columnsSlice.actions;

export default columnsSlice.reducer;
