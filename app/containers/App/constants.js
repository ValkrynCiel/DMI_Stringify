/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_WORDS = 'dmitakehome/App/LOAD_WORDS';
export const LOAD_WORDS_SUCCESS = 'dmitakehome/App/LOAD_WORDS_SUCCESS';
export const LOAD_WORDS_ERROR = 'dmitakehome/App/LOAD_WORDS_ERROR';
export const ADD_WORD = 'dmitakehome/App/ADD_WORD';
export const ADD_WORD_SUCCESS = 'dmitakehome/App/ADD_WORD_SUCCESS';
export const ADD_WORD_ERROR = 'dmitakehome/App/ADD_WORD_ERROR';
export const CLEAR_NOTIFICATION = 'dmitakehome/App/CLEAR_NOTIFICATION';
