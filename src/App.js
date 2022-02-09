import './App.css';
import React from 'react';
import MainPage from './pages/MainPage';
// import { Switch } from 'react-router-dom';
import { Route, Router } from 'react-router';

function App() {
  return (
    <Router>
      <Route exact path="/" component={ MainPage }  />
    </Router>
  );
}

export default App;
