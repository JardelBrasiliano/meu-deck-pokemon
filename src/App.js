import React from 'react';
import { Provider } from 'react-redux';
import SignIn from './pages/SignIn';

import { store } from './store';

import './reset.css';

function App() {
  return (
    <Provider store={store}>
      <SignIn />
    </Provider>
  );
}

export default App;
