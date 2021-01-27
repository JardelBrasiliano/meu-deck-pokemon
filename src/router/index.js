import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import ListMovie from '../pages/ListMovie';
import FastDeck from '../pages/FastDeck';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ListMovie} />
        <Route path="/login" component={SignIn} />
        <Route path="/my-fast-deck" component={FastDeck} />

        <Route path="/pokemon/" exact component={ListMovie} />
        <Route path="/pokemon/:page" component={ListMovie} />

        <Route component={() => <h1>Pagina não existe</h1>} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
