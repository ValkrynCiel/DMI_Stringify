import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectRouter = state => state.router;
const selectGlobal = state => state.global || initialState;

const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.error,
  );

const makeSelectStrings = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.strings,
  );

const makeSelectNotification = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.notification,
  );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

export {
  makeSelectLoading,
  makeSelectError,
  makeSelectStrings,
  makeSelectNotification,
  makeSelectLocation,
};
