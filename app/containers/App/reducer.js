/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  LOAD_WORDS_SUCCESS,
  LOAD_WORDS,
  LOAD_WORDS_ERROR,
  ADD_WORD_SUCCESS,
  ADD_WORD_ERROR,
  CLEAR_NOTIFICATION,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: true,
  error: false,
  words: null,
  notification: false,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_WORDS:
        draft.loading = true;
        draft.error = false;
        draft.words = null;
        break;

      case LOAD_WORDS_SUCCESS:
        draft.words = action.words;
        draft.loading = false;
        break;

      case LOAD_WORDS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case ADD_WORD:
        draft.notification = action.notification;
        draft.error = false;
        break;

      case ADD_WORD_SUCCESS:
        draft.words.unshift(action.word);
        draft.notification = action.notification;
        draft.error = false;
        break;

      case ADD_WORD_ERROR:
        draft.error = action.error;
        draft.notification = false;
        break;

      case CLEAR_NOTIFICATION:
        draft.notification = false;
        draft.error = false;
        break;
    }
  });

export default appReducer;
