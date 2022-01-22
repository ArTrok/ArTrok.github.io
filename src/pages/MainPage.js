import React from 'react';
import { Link } from 'react-router-dom';
import ProfilePicture from '../images/Linkedin.jpg';
import './style.css'

export default function MainPage() {
  return (
    <div>
      <nav>
        <Link to="/" className='nav-button'>
          Home
        </Link>
        <Link to="/about" className='nav-button'>
          About
        </Link>
        <Link to="/projects" className='nav-button'>
          My Projects
        </Link>
      </nav>
      <h1 id="title">Portfolio: Arthur T. Santos</h1>
      <img src={ ProfilePicture } alt="Arthur T. Santos's face" width="300px" id='profile-pic' />
      <h4 id='description'>
        Born in <em>Sao Paulo City, Brazil,</em> Arthur is a person with a lot of determination
        and is trying to be the change in the world doing what he can with his knowledge
        and physical capabilities. Always updating himself with information from cutting
        edge news hubs most of them focused in tech news. Discovered his abilities as a
        <strong>developer</strong> after graduting in chemical engineering and not finding a job that would
        make him feel fulfilled.
      </h4>
      <h3 id="up"><a href="#down">Soft Skills:</a></h3>
      <h3>This is not a blog but I like it very much: <a href="https://mises.org/" rel='noreferrer' target="_blank">Mises Institute</a></h3>
      <ul>
        <li>Emotional Intelligence</li>
        <li>Discipline</li>
        <li><strong>Empathetic</strong></li>
        <li>Fast Learner</li>
        <li>Entrepreneur Mindset</li>
        <li id="down"><a href="#up">Honesty</a></li>
      </ul>
    </div>
  )
}
