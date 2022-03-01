import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import userEvent from '@testing-library/user-event';

const NAV_BUTTONS = ['Home_b', 'About_b', 'Projects_b', 'Skills_b', 'Contact_b'];

describe('Skills Page', () => {
  
  it('should have nav buttons', () => {
    renderWithRouter();
    userEvent.click(screen.getByTestId('Skills_b'));
    for (const texts of NAV_BUTTONS) {
      const navButtons = screen.getByTestId(texts);
      expect(navButtons).toBeDefined();
    }
  });
  
  it('should have "watermark" at the end of the page', () => {
    renderWithRouter();
    userEvent.click(screen.getByTestId('Skills_b'));

    const madeByMeSeal = screen.getByTestId('made_by');
    const madeByMeSealImg = screen.getByRole('img', { name: 'madeByMeSeal' });
    expect(madeByMeSeal).toBeDefined();
    expect(madeByMeSealImg).toBeDefined();
  });

  it('should have an emote on top left side representing the page', () => {
    renderWithRouter();
    userEvent.click(screen.getByTestId('Skills_b'));

    const pageEmote = screen.getByRole('img', { name: 'pageEmote' });
    expect(pageEmote).toBeDefined();
  });

  it('should have hard skills container', () => {
    renderWithRouter();
    userEvent.click(screen.getByTestId('Skills_b'));

  });
  it('should have soft skills container', () => {
    renderWithRouter();
    userEvent.click(screen.getByTestId('Skills_b'));

  });
  it('should have 12 icons of hard skills', () => {
    renderWithRouter();
    userEvent.click(screen.getByTestId('Skills_b'));

  });
  it('should have 6 icons of soft skills', () => {
    renderWithRouter();
    userEvent.click(screen.getByTestId('Skills_b'));

  });
});