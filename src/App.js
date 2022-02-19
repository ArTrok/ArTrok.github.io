import './App.css';
import React from 'react';
import MainPage from './pages/MainPage';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <MainPage /> }  />
      <Route path="/About" element={ <About /> }  />
      <Route path="/Projects" element={ <Projects /> }  />
      <Route path="/Skills" element={ <Skills /> }  />
    </Routes>
  );
}

export default App;
