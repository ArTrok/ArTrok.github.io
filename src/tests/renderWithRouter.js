import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import App from '../App';

const renderWithRouter = () => {
  const history = createMemoryHistory();
  return ({
    ...render(<Router history={ history }><App /></Router>), history,
  });
};

export default renderWithRouter;