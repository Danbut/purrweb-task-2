import {takeLatest} from 'redux-saga/effects';
import {logout, signIn, signUp} from '../ducks/auth';
import {
  addColumn,
  getColumns,
  renameColumn,
} from '../ducks/columns/columnsSlice';
import {
  addComment,
  deleteComment,
  editComment,
  getComments,
} from '../ducks/comments/commentsSlice';
import {addPrayer, getPrayers} from '../ducks/prayers/prayersSlice';
import {handleLogout, handleSignIn, handleSignUp} from './auth';
import {handleAddColumn} from './columns/handleAddColumn';
import {handleGetColumns} from './columns/handleGetColumns';
import {handleRenameColumn} from './columns/handleRenameColumn';
import {handleAddComment} from './comments/handleAddComment';
import {handleDeleteComment} from './comments/handleDeleteComment';
import {handleEditComment} from './comments/handleEditComment';
import {handleGetComments} from './comments/handleGetComments';
import {handleCreatePrayer} from './prayers/handleCreatePrayer';
import {handleGetPrayers} from './prayers/handleGetPrayers';

export function* watcherSaga() {
  yield takeLatest(getColumns.type, handleGetColumns);
  yield takeLatest(renameColumn.type, handleRenameColumn);
  yield takeLatest(addColumn.type, handleAddColumn);
  yield takeLatest(getPrayers.type, handleGetPrayers);
  yield takeLatest(addPrayer.type, handleCreatePrayer);
  yield takeLatest(addComment.type, handleAddComment);
  yield takeLatest(getComments.type, handleGetComments);
  yield takeLatest(editComment.type, handleEditComment);
  yield takeLatest(deleteComment.type, handleDeleteComment);
  yield takeLatest(signIn.type, handleSignIn);
  yield takeLatest(signUp.type, handleSignUp);
  yield takeLatest(logout.type, handleLogout);
}
