import './App.css';
import React from 'react';
import MainPage from './pages/MainPage';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <MainPage /> }  />
      <Route path="/about" element={ <About /> }  />
      <Route path="/projects" element={ <Projects /> }  />
      <Route path="/skills" element={ <Skills /> }  />
      <Route path="/contact" element={ <Contact /> }  />
    </Routes>
  );
}

export default App;
