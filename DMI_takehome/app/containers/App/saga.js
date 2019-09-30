/**
 * Gets strings from Node.js server
 */

import { put, takeLatest, takeEvery, all, delay } from 'redux-saga/effects';
import {
  LOAD_STRINGS,
  ADD_STRING,
  ADD_STRING_SUCCESS,
} from 'containers/App/constants';
import {
  stringsLoaded,
  stringLoadingError,
  stringAdded,
  stringAddingError,
  clearNotification,
} from 'containers/App/actions';

import API from 'utils/API';

/**
 * Github repos request/response handler
 */
function* getStringList() {
  // Select username from store
  try {
    const strings = yield API.getStrings();
    yield put(stringsLoaded(strings));
  } catch (err) {
    yield put(stringLoadingError(err.message));
  }
}

function* watchGetStringList() {
  yield takeLatest(LOAD_STRINGS, getStringList);
}

function* postNewString(action) {
  try {
    const { id, string } = action;
    yield API.postString(id, string);
    yield put(stringAdded(id, string));
  } catch (err) {
    yield put(stringAddingError(err.message));
  }
}

function* watchPostNewString() {
  yield takeEvery(ADD_STRING, postNewString);
}

function* clearAddSuccess() {
  yield delay(2000);
  yield put(clearNotification());
}

function* watchClearAddSuccess() {
  yield takeLatest(ADD_STRING_SUCCESS, clearAddSuccess);
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* rootSaga() {
  yield all([
    watchGetStringList(),
    watchPostNewString(),
    watchClearAddSuccess(),
  ]);
}
