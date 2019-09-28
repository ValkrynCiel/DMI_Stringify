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
  LOAD_STRINGS_SUCCESS,
  LOAD_STRINGS,
  LOAD_STRINGS_ERROR,
  ADD_STRING,
  ADD_STRING_SUCCESS,
  ADD_STRING_ERROR,
  CLEAR_NOTIFICATION,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: true,
  error: false,
  strings: null,
  notification: false,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_STRINGS: {
        draft.loading = true;
        draft.error = false;
        draft.strings = null;
        break;
      }

      case LOAD_STRINGS_SUCCESS: {
        draft.strings = action.strings;
        draft.loading = false;
        break;
      }

      case LOAD_STRINGS_ERROR: {
        draft.error = action.error;
        draft.loading = false;
        break;
      }

      case ADD_STRING: {
        draft.notification = action.notification;
        draft.error = false;
        break;
      }

      case ADD_STRING_SUCCESS: {
        const { id, string, notification } = action;
        draft.strings.unshift({ id, string });
        draft.notification = notification;
        draft.error = false;
        break;
      }
      case ADD_STRING_ERROR: {
        draft.error = action.error;
        draft.notification = false;
        break;
      }

      case CLEAR_NOTIFICATION: {
        draft.notification = false;
        draft.error = false;
        break;
      }
    }
  });

export default appReducer;
