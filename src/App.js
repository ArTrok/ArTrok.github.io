import './App.css';
import React from 'react';
import MainPage from './pages/MainPage';
import About from './pages/About';
import Projects from './pages/Projects';
// import { Switch } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <MainPage /> }  />
      <Route path="/About" element={ <About /> }  />
      <Route path="/Projects" element={ <Projects /> }  />
    </Routes>
  );
}

export default App;
