import React, { useState } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Button from './components/Button';
import ResponsiveDialog from './components/ResponsiveDialog';
import Home from './containers/Home';
import store from './redux/store';
import MainScreen from './Screen';

function App() {
  return (
    <div className="App">
      <Provider store={store} >
        <Home />
      </Provider>
    </div>
  );
}

export default App;
