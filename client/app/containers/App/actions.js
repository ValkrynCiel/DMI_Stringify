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

/**
 * Add a new string, this action starts the request saga
 *
 * @return {object} An action object with a type of ADD_STRING, passes id and string as well as a notification for user alerts
 */

export function addString(id, string) {
  return {
    type: ADD_STRING,
    id,
    string,
    notification: `Adding ${string} to our list...`,
  };
}

/**
 * Dispatched when a new string successfully is posted
 *
 * @return {object} An action object with a type of ADD_STRING_SUCCESS, passes id and string as well as a notification for user alerts
 */
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

/**
 * Dispatched when an error occurs when trying to post a string
 *
 * @return {object} An action object with a type of ADD_STRING_ERROR, passes in the error message
 */

export function stringAddingError(error) {
  return {
    type: ADD_STRING_ERROR,
    error,
  };
}

/**
 * Dispatched after an action with a notification is dispatched. This removes the notification after a couple seconds
 *
 * @return {object} An action object with a type of CLEAR_NOTIFICATION
 */

export function clearNotification() {
  return {
    type: CLEAR_NOTIFICATION,
  };
}
