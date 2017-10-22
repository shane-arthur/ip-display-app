/* eslint import/no-named-as-default: 0,
import/no-named-as-default-member: 0,
react/jsx-filename-extension : 0*/

import React from 'react';
import { Router, Route } from 'react-router';
import IPListContainer from '../containers/IPListContainer/IPListContainer';

export default function (history) {
  return (
    <Router history={history}>
      <Route path="/" component={IPListContainer} />
    </Router>
  );
}
