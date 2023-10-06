import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './views/todo';
import { Provider } from 'react-redux';
import store from './redux/store';


function App() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}

export default App;
