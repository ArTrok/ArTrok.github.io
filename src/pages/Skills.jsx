import React from 'react';
import MadeByMeSeal from '../components/MadeByMeSeal';
import NavBar from '../components/NavBar';
import JavaScript from '../images/skills_icons/javascript-original.svg';
import ReactJS from '../images/skills_icons/react-original.svg';
import NodeJS from '../images/skills_icons/nodejs-original.svg';
import Redux from '../images/skills_icons/redux-original.svg';
import Jest from '../images/skills_icons/jest-plain.svg';
import TailwindCSS from '../images/skills_icons/tailwindcss-plain.svg';
import CSS from '../images/skills_icons/css3-original.svg';
import MySQL from '../images/skills_icons/mysql-original-wordmark.svg';
import Docker from '../images/skills_icons/docker-original-wordmark.svg';
import Express from '../images/skills_icons/express-original-wordmark.svg';
import GitHub from '../images/skills_icons/github-original.svg';
import Git from '../images/skills_icons/git-original.svg';
import Critical from '../images/skills_icons/criticalThinking.png';
import Creativity from '../images/skills_icons/creativity.png';
import LearnToLearn from '../images/skills_icons/learn.png';
import Colab from '../images/skills_icons/colab.png';
import Emotional from '../images/skills_icons/emotional.png';
import Communication from '../images/skills_icons/communication.png';

const icons = [{ name: 'JavaScript', link: JavaScript, alt: 'JavaScript_icon' }, { name: 'ReactJS', link: ReactJS, alt: 'ReactJS_icon' },
 { name: 'NodeJS', link: NodeJS, alt: 'NodeJS_icon'}, { name: 'Redux', link: Redux, alt: 'Redux_icon'}, { name: 'Jest', link: Jest, alt: 'Jest_icon'}, { name: 'TailwindCSS', link: TailwindCSS, alt: 'TailwindCSS_icon'},
 { name: 'CSS', link: CSS, alt: 'CSS_icon'}, { name: 'MySQL', link: MySQL, alt: 'MySQL_icon'},
 { name: 'Docker', link: Docker, alt: 'Docker_icon'}, { name: 'Express', link: Express, alt: 'Express_icon'},
 { name: 'GitHib', link: GitHub, alt: 'GitHub_icon'}, { name: 'Git', link: Git, alt: 'Git_icon'}];
 const iconsSoft = [{link: Critical, text: 'Pensamento Crítico'},
 {link: Creativity, text: 'Criatividade'},
 {link: LearnToLearn, text: 'Aprender a aprender'},
 {link: Colab, text: 'Colaboração'}, {link: Emotional, text: 'Inteligência Emocional'}, {link: Communication, text: 'Comunicação'}];

const Skills = () => {
  return (
    <>
    <NavBar />
    <div className='main_content_container'>
      <div className="hard_skills_container grid grid-rows-3 grid-cols-6">
        <h2>Hard Skills</h2>
        {icons.map((icon, index) => {
          return (
          <div key={index} className="icon_container">
            <img src={icon.link} alt={icon.alt} />
            <p>{icon.name}</p>
          </div>)
        })}

      </div>
      <div className="soft_skills_container grid grid-rows-2 grid-cols-6">
        <h2>Soft Skills</h2>
        {iconsSoft.map((icon, index) => {
          return (
          <div key={index} className="icon_container">
            <img src={icon.link} alt={icon.text} />
            <p>{icon.text}</p>
          </div>)
        })}
      </div>
    </div>
    <MadeByMeSeal />
  </>
  )
}

export default Skills;