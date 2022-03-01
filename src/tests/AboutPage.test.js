import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import userEvent from '@testing-library/user-event';

const NAV_BUTTONS = ['Home_b', 'About_b', 'Projects_b', 'Skills_b', 'Contact_b'];

describe('About Page', () => {
  
  it('should have nav buttons', () => {
    renderWithRouter();
    userEvent.click(screen.getByTestId('About_b'));
    for (const texts of NAV_BUTTONS) {
      const navButtons = screen.getByTestId(texts);
      expect(navButtons).toBeDefined();
    }
  });
  
  it('should have a fun/funny picture', () => {
    renderWithRouter();
    userEvent.click(screen.getByTestId('About_b'));
    const firstPic = screen.getByTestId('first_pic');
    expect(firstPic).toBeDefined();
  });

  it('should have an old picture', () => {
    renderWithRouter();
    userEvent.click(screen.getByTestId('About_b'));

    const secondPic = screen.getByTestId('second_pic');
    expect(secondPic).toBeDefined();
  });

  it('should have a recent picture', () => {
    renderWithRouter();
    userEvent.click(screen.getByTestId('About_b'));

    const thirdPic = screen.getByTestId('third_pic');
    expect(thirdPic).toBeDefined();
  });

  it('should have general context description', () => {
    renderWithRouter();
    userEvent.click(screen.getByTestId('About_b'));

    const briefDescription = screen.getByTestId('brief_description1');
    expect(briefDescription).toBeDefined();
  });

  it('should have text description about my past', () => {
    renderWithRouter();
    userEvent.click(screen.getByTestId('About_b'));

    const briefDescription = screen.getByTestId('brief_description2');
    expect(briefDescription).toBeDefined();
  });

  it('should have text description about my goals and future', () => {
    renderWithRouter();
    userEvent.click(screen.getByTestId('About_b'));

    const briefDescription = screen.getByTestId('brief_description3');
    expect(briefDescription).toBeDefined();
  });

  it('should have "watermark" at the end of the page', () => {
    renderWithRouter();
    userEvent.click(screen.getByTestId('About_b'));

    const madeByMeSeal = screen.getByTestId('made_by');
    const madeByMeSealImg = screen.getByRole('img', { name: 'madeByMeSeal' });
    expect(madeByMeSeal).toBeDefined();
    expect(madeByMeSealImg).toBeDefined();
  });

  it('should have an emote on top left side representing the page', () => {
    renderWithRouter();
    userEvent.click(screen.getByTestId('About_b'));

    const pageEmote = screen.getByRole('img', { name: 'pageEmote' });
    expect(pageEmote).toBeDefined();
  });
});