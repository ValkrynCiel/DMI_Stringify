/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_STRINGS,
  LOAD_STRINGS_SUCCESS,
  LOAD_STRINGS_ERROR,
  ADD_STRING,
  ADD_STRING_ERROR,
  ADD_STRING_SUCCESS,
  CLEAR_NOTIFICATION,
} from './constants';

/**
 * Load the strings, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_STRINGS
 */
export function loadStrings() {
  return {
    type: LOAD_STRINGS,
  };
}

/**
 * Dispatched when the strings are loaded by the request saga
 *
 * @param  {array} strings array of strings from db
 *
 * @return {object}      An action object with a type of LOAD_STRINGS_SUCCESS passing the repos
 */
export function stringsLoaded(strings) {
  return {
    type: LOAD_STRINGS_SUCCESS,
    strings,
  };
}

/**
 * Dispatched when loading the strings fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_STRINGS_ERROR passing the error
 */
export function stringLoadingError(error) {
  return {
    type: LOAD_STRINGS_ERROR,
    error,
  };
}

export function addString(id, string) {
  return {
    type: ADD_STRING,
    id,
    string,
    notification: `Adding ${string} to our list...`,
  };
}

export function stringAdded(id, string) {
  const notification =
    string.length > 30
      ? `Nice. That's a long string!`
      : `Success! You've added "${string}" to the list!`;
  return {
    type: ADD_STRING_SUCCESS,
    notification,
    id,
    string,
  };
}

export function stringAddingError(error) {
  return {
    type: ADD_STRING_ERROR,
    error,
  };
}

export function clearNotification() {
  return {
    type: CLEAR_NOTIFICATION,
  };
}
