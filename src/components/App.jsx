import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import Todos from './Todo/Todos';

const App = () => {
  return (
    <div className="app">
      <Todos />
    </div>
  );
};

export default App;
