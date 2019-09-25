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

import NavBar from 'components/NavBar';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Switch>
        <NavBar />
        <Route exact path="/" component={HomePage} />
        <Route exact path='/words' component={HomePage} />
        <Route exact path='/words/new' component={HomePage} />
        <Redirect to='/' />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
