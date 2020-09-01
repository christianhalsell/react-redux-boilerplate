import React from 'react';
import './App.css';
import Greeting from './Greeting';

// Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <div className='App'>
      <Greeting />
    </div>
  </Provider>
);

export default App;
