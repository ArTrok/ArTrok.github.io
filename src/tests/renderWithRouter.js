import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import App from '../App';
// import About from '../pages/About';
// import Projects from '../pages/Projects';
// import Skills from '../pages/Skills';
// import Contact from '../pages/Contact';

const renderWithRouter = () => {
  const history = createMemoryHistory();
  return ({
    ...render(<Router history={ history }><App /></Router>), history,
  });
};

export default renderWithRouter;