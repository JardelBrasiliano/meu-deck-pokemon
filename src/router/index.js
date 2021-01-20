import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import ListMovie from '../pages/ListMovie';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ListMovie} />
        <Route path="/login" component={SignIn} />

        <Route component={() => <h1>Pagina não existe</h1>} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;