import React from 'react'
import MadeByMeSeal from '../components/MadeByMeSeal'
import NavBar from '../components/NavBar'
import GitHubIcon from '../images/github-original.svg';
import LinkedInIcon from '../images/linkedin-plain.svg';

const Contact = () => {
  return (
    <>
    <NavBar />
    <div className='main_content_container'>
      <h2 data-testid="ContactMe">Entre em Contato</h2>
      <label htmlFor="Name">Nome Completo: </label>
      <input type="text" aria-label='Name' />
      <label htmlFor="Email">E-Mail: </label>
      <input type="email" aria-label="Email" id="email" />
      <label htmlFor="Message">Mensagem: </label>
      <textarea aria-label="Message" id="message" cols="60" rows="5" className='resize-none'></textarea>
      <button aria-label='Send_It'>Enviar</button>
      <a href='https://github.com/ArTrok' aria-label='GitHub_L' className='flex'>
            Conheça o meu GitHub
            <img src={ GitHubIcon } alt="GitHub_Icon" className="w-24" />
          </a>
          <a href='https://www.linkedin.com/in/arthur-teixeira-santos/' aria-label='LinkedIn_L' className='flex'>
            Conheça o meu LinkedIn
            <img src={ LinkedInIcon } alt="LinkedIn_Icon" className="w-24" />
          </a>
    </div>
    <MadeByMeSeal />
  </>
  )
}

export default Contact