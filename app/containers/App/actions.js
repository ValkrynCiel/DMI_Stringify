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

import { LOAD_WORDS, LOAD_WORDS_SUCCESS, LOAD_WORDS_ERROR } from './constants';

/**
 * Load the words, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_WORDS
 */
export function loadWords() {
  return {
    type: LOAD_WORDS,
  };
}

/**
 * Dispatched when the words are loaded by the request saga
 *
 * @param  {array} words array of strings from db
 *
 * @return {object}      An action object with a type of LOAD_WORDS_SUCCESS passing the repos
 */
export function wordsLoaded(words) {
  return {
    type: LOAD_WORDS_SUCCESS,
    words,
  };
}

/**
 * Dispatched when loading the words fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_WORDS_ERROR passing the error
 */
export function wordLoadingError(error) {
  return {
    type: LOAD_WORDS_ERROR,
    error,
  };
}
