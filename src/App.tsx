import React from 'react';
import './App.css';
import Tasky from './containers/Tasky/Tasky';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Tasky />
      </div>
    </BrowserRouter>
  );
}

export default App;
