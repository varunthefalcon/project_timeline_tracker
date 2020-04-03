import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from "history";
import { Router, Switch, Route } from 'react-router-dom'
const customHistory = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={customHistory} >
      <Switch>
        <Route path='/login' component={() => <p>login</p>} />
        <Route path='/logout' component={() => <p>logout</p>} />
        <Route path='/' component={App} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
