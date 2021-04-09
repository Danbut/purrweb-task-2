// import {ActionCreatorWithPayload, createSlice} from '@reduxjs/toolkit';
// import {IPrayer} from '../../entities/Prayer';
// import {RootState} from '../store';

// interface prayersState {
//   prayers: IPrayer[];
//   isLoading: boolean;
// }

// const initialState: prayersState = {
//   prayers: [],
//   isLoading: false,
// };

// export const prayersSlice = createSlice({
//   name: 'prayers',
//   initialState,
//   reducers: {
//     getprayers: state => {
//       state.isLoading = true;
//     },
//     setprayers: (state, action) => {
//       state.prayers = action.payload.sort((a, b) => {
//         if (a.id > b.id) {
//           return -1;
//         }
//         if (a.id < b.id) {
//           return 1;
//         }

//         return 0;
//       });
//       state.isLoading = false;
//     },
//     renameColumn: state => {
//       state.isLoading = true;
//     },
//     addColumn: state => {
//       state.isLoading = true;
//     },
//   },
// });

// export const selectprayers = (state: RootState) => state.prayers.prayers;
// export const selectprayersIsLoading = (state: RootState) =>
//   state.prayers.isLoading;

// export const renameColumn: ActionCreatorWithPayload<{
//   columnId: string;
//   title: string;
// }> = prayersSlice.actions.renameColumn;

// export const {setprayers, getprayers, addColumn} = prayersSlice.actions;

// export default prayersSlice.reducer;
