import {ActionCreatorWithPayload, createSlice} from '@reduxjs/toolkit';
import {IComment} from '../../../interfaces/IComment';

import {RootState} from '../../store';

interface CommentsState {
  comments: IComment[];
  isLoading: boolean;
}

const initialState: CommentsState = {
  comments: [],
  isLoading: false,
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    getComments: state => {
      state.isLoading = true;
    },
    setComments: (state, action) => {
      //TODO: sort by date
      state.comments = action.payload.map(
        c =>
          ({
            id: c.id.toString(),
            text: c.body,
            userId: c.userId.toString(),
            createdAt: c.created,
          } as IComment),
      );
      state.isLoading = false;
    },
    addComment: (state, action) => {
      state.comments = [...state.comments, action.payload];
    },
    deleteComment: (state, action) => {},
    editComment: (state, action) => {},
    sendComment: (state, action) => {},
  },
});

export const sendComment: ActionCreatorWithPayload<{
  text: string;
  prayerId: string;
}> = commentsSlice.actions.sendComment;

export const selectComments = (state: RootState) => state.comments.comments;
export const selectCommentsIsLoading = (state: RootState) =>
  state.comments.isLoading;
export const selectCommentsByPrayerId = (state: RootState, prayerId: string) =>
  state.comments.comments.filter(c => prayerId === c.prayerId);

export const {
  setComments,
  getComments,
  addComment,
  deleteComment,
  editComment,
} = commentsSlice.actions;

export default commentsSlice.reducer;
