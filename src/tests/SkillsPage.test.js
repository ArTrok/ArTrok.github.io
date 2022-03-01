import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import userEvent from '@testing-library/user-event';

const NAV_BUTTONS = ['Home_b', 'About_b', 'Projects_b', 'Skills_b', 'Contact_b'];
const ALT_TEXTS_HARD = ['JavaScript_icon', 'ReactJS_icon', 'NodeJS_icon', 'CSS_icon', 'TailwindCSS_icon', 'Redux_icon', 'Express_icon', 'Docker_icon', 'MySQL_icon', 'Jest_icon', 'Git_icon', 'GitHub_icon'];
const TEXTS_SOFT = ['Pensamento Crítico', 'Criatividade', 'Aprender a aprender', 'Colaboração', 'Inteligência Emocional', 'Comunicação'];

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

  it('should have hard skills text', () => {
    renderWithRouter();
    userEvent.click(screen.getByTestId('Skills_b'));
    const hardSkillsText = screen.getByText('Hard Skills');
    expect(hardSkillsText).toBeDefined();
  });
  it('should have soft skills text', () => {
    renderWithRouter();
    userEvent.click(screen.getByTestId('Skills_b'));
    const softSkillsText = screen.getByText('Soft Skills');
    expect(softSkillsText).toBeDefined();
  });
  it('should have 12 icons of hard skills', () => {
    renderWithRouter();
    userEvent.click(screen.getByTestId('Skills_b'));
    for (const texts of ALT_TEXTS_HARD) {
      const hardSkills = screen.getByAltText(texts);
      expect(hardSkills).toBeDefined();
    }
  });
  it('should have 6 icons of soft skills', () => {
    renderWithRouter();
    userEvent.click(screen.getByTestId('Skills_b'));
    for (const texts of TEXTS_SOFT) {
      const softSkills = screen.getByText(texts);
      expect(softSkills).toBeDefined();
    }
  });
});