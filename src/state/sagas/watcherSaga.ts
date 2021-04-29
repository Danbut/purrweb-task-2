import {takeLatest} from 'redux-saga/effects';
import {logout, signIn, signUp} from '../ducks/auth';
import {
  addColumn,
  getColumns,
  renameColumn,
} from '../ducks/columns/columnsSlice';
import {
  sendComment,
  deleteComment,
  editComment,
  getComments,
} from '../ducks/comments/commentsSlice';
import {
  addPrayer,
  deletePrayer,
  getPrayers,
  updatePrayerDescription,
  editPrayerTitle,
  setPrayerIsChecked,
} from '../ducks/prayers/prayersSlice';
import {handleLogout, handleSignIn, handleSignUp} from './auth';
import {handleAddColumn} from './columns/handleAddColumn';
import {handleGetColumns} from './columns/handleGetColumns';
import {handleRenameColumn} from './columns/handleRenameColumn';
import {handleAddComment} from './comments/handleAddComment';
import {handleDeleteComment} from './comments/handleDeleteComment';
import {handleEditComment} from './comments/handleEditComment';
import {handleGetComments} from './comments/handleGetComments';
import {handleEditPrayerTitle} from './prayers/handleEditPrayerTitle';
import {handleCreatePrayer} from './prayers/handleCreatePrayer';
import {handleDeletePrayer} from './prayers/handleDeletePrayer';
import {handleGetPrayers} from './prayers/handleGetPrayers';
import {handleUpdatePrayerDescription} from './prayers/handleUpdatePrayerDescription';
import {handleSetPrayerIsChecked} from './prayers/handleSetPrayerIsChecked';

export function* watcherSaga() {
  yield takeLatest(getColumns.type, handleGetColumns);
  yield takeLatest(renameColumn.type, handleRenameColumn);
  yield takeLatest(addColumn.type, handleAddColumn);
  yield takeLatest(getPrayers.type, handleGetPrayers);
  yield takeLatest(addPrayer.type, handleCreatePrayer);
  yield takeLatest(sendComment.type, handleAddComment);
  yield takeLatest(getComments.type, handleGetComments);
  yield takeLatest(editComment.type, handleEditComment);
  yield takeLatest(deleteComment.type, handleDeleteComment);
  yield takeLatest(signIn.type, handleSignIn);
  yield takeLatest(signUp.type, handleSignUp);
  yield takeLatest(logout.type, handleLogout);
  yield takeLatest(updatePrayerDescription.type, handleUpdatePrayerDescription);
  yield takeLatest(deletePrayer.type, handleDeletePrayer);
  yield takeLatest(editPrayerTitle.type, handleEditPrayerTitle);
  yield takeLatest(setPrayerIsChecked.type, handleSetPrayerIsChecked);
}
