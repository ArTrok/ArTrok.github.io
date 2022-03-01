import React from 'react';
import NavBar from '../components/NavBar';
import ProfilePicture from '../images/Linkedin.jpg';
import GitHubIcon from '../images/github-original.svg'
import LinkedInIcon from '../images/linkedin-plain.svg'
import './style.css'
import MadeByMeSeal from '../components/MadeByMeSeal';

export default function MainPage() {
  return (
    <>
      <NavBar />
      <div className='main_content_container flex'>
        <div className='text_content_container'>
          <h1 id="title">Arthur Teixeira Santos</h1>
          <p id='description' data-testid="brief_description">
            Olá, meu nome é Arthur e estou buscando ser reconhecido como desenvolvedor
            através de minhas ações. Na jornada para a realização de um sonho.
          </p>
          <a href='https://github.com/ArTrok' aria-label='GitHub_L' className='flex'>
            Conheça o meu GitHub
            <img src={ GitHubIcon } alt="GitHub_Icon" className="w-24" />
          </a>
          <a href='https://www.linkedin.com/in/arthur-teixeira-santos/' aria-label='LinkedIn_L' className='flex'>
            Conheça o meu LinkedIn
            <img src={ LinkedInIcon } alt="LinkedIn_Icon" className="w-24" />
          </a>
        </div>
        <img src={ ProfilePicture } alt="Arthur T. Santos's face" width="300px" id='profile-pic' data-testid="profile_pic" />
      </div>
      <MadeByMeSeal />
    </>
  )
}
