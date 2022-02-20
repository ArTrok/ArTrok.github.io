import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

const NAV_BUTTONS = ['Home_b', 'About_b', 'Projects_b', 'Skills_b', 'Contact_b'];

describe('Main Page', () => {
  // beforeEach(() => {
  //   const { history } = renderWithRouter(<App />);
  // });
  it('should have nav buttons', () => {
    renderWithRouter(<App />);
    for (const texts of NAV_BUTTONS) {
      const navButtons = screen.getByTestId(texts);
      expect(navButtons).toBeInTheDocument();
    }
  });
});