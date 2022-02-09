import './App.css';
import React from 'react';
import MainPage from './pages/MainPage';
// import { Switch } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <MainPage /> }  />
    </Routes>
  );
}

export default App;
