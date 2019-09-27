/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NewWordPage from 'containers/NewWordPage';
import WordListPage from 'containers/WordListPage/Loadable';

import NavBar from 'components/NavBar';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/words" component={WordListPage} />
        <Route exact path="/words/new" component={NewWordPage} />
        <Redirect to="/" />
      </Switch>
      <GlobalStyle />
    </>
  );
}
