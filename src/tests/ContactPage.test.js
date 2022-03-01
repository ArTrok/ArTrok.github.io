import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import userEvent from '@testing-library/user-event';

const NAV_BUTTONS = ['Home_b', 'About_b', 'Projects_b', 'Skills_b', 'Contact_b'];

describe('Contact Page', () => {
  
  it('should have nav buttons', () => {
    renderWithRouter();
    userEvent.click(screen.getByTestId('Contact_b'));
    for (const texts of NAV_BUTTONS) {
      const navButtons = screen.getByTestId(texts);
      expect(navButtons).toBeDefined();
    }
  });
  
  it('should have "watermark" at the end of the page', () => {
    renderWithRouter();
    userEvent.click(screen.getByTestId('Contact_b'));

    const madeByMeSeal = screen.getByTestId('made_by');
    const madeByMeSealImg = screen.getByRole('img', { name: 'madeByMeSeal' });
    expect(madeByMeSeal).toBeDefined();
    expect(madeByMeSealImg).toBeDefined();
  });

  it('should have an emote on top left side representing the page', () => {
    renderWithRouter();
    userEvent.click(screen.getByTestId('Contact_b'));

    const pageEmote = screen.getByRole('img', { name: 'pageEmote' });
    expect(pageEmote).toBeDefined();
  });

  it('should have "contact me" text', () => {
    renderWithRouter();
    userEvent.click(screen.getByTestId('Contact_b'));
    const contactMe = screen.getByTestId('ContactMe');
    expect(contactMe).toBeDefined();
  });
  it('should have name input', () => {
    renderWithRouter();
    userEvent.click(screen.getByTestId('Contact_b'));
    const nameInput = screen.getByRole('textbox', { name: 'Name' });
    expect(nameInput).toBeDefined();

  });
  it('should have e-mail input', () => {
    renderWithRouter();
    userEvent.click(screen.getByTestId('Contact_b'));
    const emailInput = screen.getByRole('textbox', { name: 'Email' });
    expect(emailInput).toBeDefined();

  });
  it('should have message area', () => {
    renderWithRouter();
    userEvent.click(screen.getByTestId('Contact_b'));
    const messageInput = screen.getByRole('textbox', { name: 'Message' });
    expect(messageInput).toBeDefined();

  });
  it('should have send button', () => {
    renderWithRouter();
    userEvent.click(screen.getByTestId('Contact_b'));
    const sendButton = screen.getByRole('button', { name: 'Send_It' });
    expect(sendButton).toBeDefined();

  });
  it('should have LinkedIn icon link', () => {
    renderWithRouter();
    userEvent.click(screen.getByTestId('Contact_b'));
    const linkedIn = screen.getByRole('link', { name: 'LinkedIn_L' });
    expect(linkedIn).toBeDefined();
  });
  it('should have GitHub icon link', () => {
    renderWithRouter();
    userEvent.click(screen.getByTestId('Contact_b'));
    const gitHub = screen.getByRole('link', { name: 'GitHub_L' });
    expect(gitHub).toBeDefined();
  });
});