import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router} from 'react-router-dom';
import history from 'libs/history';

import App from 'components/App';

ReactDOM.render((
  <Router>
    <App />
  </Router>
), document.getElementById('reactApp'));
