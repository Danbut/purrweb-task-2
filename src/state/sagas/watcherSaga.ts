import {takeLatest} from 'redux-saga/effects';
import {logout, signIn, signUp} from '../ducks/auth';
import {addColumn, getColumns, renameColumn} from '../ducks/columns';
import {
  deleteComment,
  editComment,
  getComments,
  sendComment,
} from '../ducks/comments';
import {
  addPrayer,
  deletePrayer,
  editPrayerTitle,
  getPrayers,
  setPrayerIsChecked,
  updatePrayerDescription,
} from '../ducks/prayers';

import {logoutFlow, signInFlow, signUpFlow} from './auth';
import {addColumnFlow, getColumnsFlow, renameColumnFlow} from './columns';
import {
  deleteCommentFlow,
  editCommentFlow,
  getCommentsFlow,
  sendCommentFlow,
} from './comments';
import {
  createPrayerFlow,
  deletePrayerFlow,
  editPrayerTitleFlow,
  getPrayersFlow,
  setPrayerIsCheckedFlow,
  updatePrayerDescriptionFlow,
} from './prayers';

export function* watcherSaga() {
  yield takeLatest(getColumns.type, getColumnsFlow);
  yield takeLatest(renameColumn.type, renameColumnFlow);
  yield takeLatest(addColumn.type, addColumnFlow);
  yield takeLatest(getPrayers.type, getPrayersFlow);
  yield takeLatest(addPrayer.type, createPrayerFlow);
  yield takeLatest(sendComment.type, sendCommentFlow);
  yield takeLatest(getComments.type, getCommentsFlow);
  yield takeLatest(editComment.type, editCommentFlow);
  yield takeLatest(deleteComment.type, deleteCommentFlow);
  yield takeLatest(signIn.type, signInFlow);
  yield takeLatest(signUp.type, signUpFlow);
  yield takeLatest(logout.type, logoutFlow);
  yield takeLatest(updatePrayerDescription.type, updatePrayerDescriptionFlow);
  yield takeLatest(deletePrayer.type, deletePrayerFlow);
  yield takeLatest(editPrayerTitle.type, editPrayerTitleFlow);
  yield takeLatest(setPrayerIsChecked.type, setPrayerIsCheckedFlow);
}
