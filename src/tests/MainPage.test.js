import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';

const NAV_BUTTONS = ['Home_b', 'About_b', 'Projects_b', 'Skills_b', 'Contact_b'];

describe('Main Page', () => {
  // beforeEach(() => {
  //   const { history } = renderWithRouter(<App />);
  // });
  it('should have nav buttons', () => {
    renderWithRouter('/');
    for (const texts of NAV_BUTTONS) {
      const navButtons = screen.getByTestId(texts);
      expect(navButtons).toBeDefined();
    }
  });

  it('should have a profile picture', () => {
    const profilePic = screen.getByTestId('profile_pic');
    expect(profilePic).toBeDefined();
  });

  it('should have my name on it', () => {
    const myName = screen.getByRole('heading', {level: 1});
    expect(myName).toBeDefined();
  });

  it('should have GitHub and LinkedIn links', () => {
    const gitHub = screen.getByRole('link', {name: 'GitHub_L'});
    const linkedIn = screen.getByRole('link', {name: 'LinkedIn_L'});
    expect(gitHub).toBeDefined();
    expect(linkedIn).toBeDefined();
  });
});