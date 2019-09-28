/**
 * Gets words from Node.js server
 */

import { put, takeLatest } from 'redux-saga/effects';
import { LOAD_WORDS } from 'containers/App/constants';
import { wordsLoaded, wordLoadingError } from 'containers/App/actions';

import API from 'utils/API';

/**
 * Github repos request/response handler
 */
export function* getWords() {
  // Select username from store
  try {
    const words = yield API.getWords();
    yield put(wordsLoaded(words));
  } catch (err) {
    yield put(wordLoadingError(err.message));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* wordListData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_WORDS, getWords);
}