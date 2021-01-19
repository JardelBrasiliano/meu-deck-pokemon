import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import SignIn from './pages/SignIn';
import ListMovie from './pages/ListMovie';

import { store } from './store';

import './reset.css';

function App() {
  return (
    <Provider store={store}>

      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ListMovie} />
          <Route path="/login" component={SignIn} />
        </Switch>
      </BrowserRouter>

    </Provider>
  );
}

export default App;
