import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import App from '../App';

const renderWithRouter = (path) => {
  const history = createMemoryHistory();
  history.push(path);
  return ({
    ...render(<Router history={ history }><App /></Router>), history,
  });
};

export default renderWithRouter;