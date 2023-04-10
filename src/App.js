import './App.css';
import TodoList from './components/TodoList';
import React, {useState, useEffect} from 'react';
import { Provider } from 'react-redux';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <TodoList/>
      </header>
    </div>
  );
}

export default App;
