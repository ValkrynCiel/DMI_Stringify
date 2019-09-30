/**
 * App.js
 * all routes are exact: 
 *    "/": home,
 *    "/strings": stringlistpage
 *    "/strings/new": newstringpage
 *    all others redirect to home
 */

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NewStringPage from 'containers/NewStringPage';
import StringListPage from 'containers/StringListPage/Loadable';

import NavBar from 'components/NavBar';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/strings" component={StringListPage} />
        <Route exact path="/strings/new" component={NewStringPage} />
        <Redirect to="/" />
      </Switch>
      <GlobalStyle />
    </>
  );
}
