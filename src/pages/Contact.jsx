import React from 'react'
import MadeByMeSeal from '../components/MadeByMeSeal'
import NavBar from '../components/NavBar'
import GitHubIcon from '../images/github-original.svg';
import LinkedInIcon from '../images/linkedin-plain.svg';

const Contact = () => {
  return (
    <div className='h-screen bg-planets'>
    <div className="bg-deep-purple bg-opacity-75">

    <NavBar />
    <div className='main_content_container bg-light-blue'>
      <h2 data-testid="ContactMe" className='text-dark-blue'>Entre em Contato</h2>
      <input type="text" aria-label='Name' placeholder='Nome Completo' className='bg-dark-blue text-cream'/>
      <input type="email" aria-label="Email" placeholder='E-Mail' id="email" className='bg-dark-blue text-cream'/>
      <textarea aria-label="Message" id="message" placeholder='Mensagem' cols="60" rows="5" className='resize-none bg-dark-blue text-cream'></textarea>
      <button aria-label='Send_It' className='text-beige-green bg-dark-blue'>Enviar</button>
      <a href='https://github.com/ArTrok' aria-label='GitHub_L' className='flex'>
            GitHub
            <img src={ GitHubIcon } alt="GitHub_Icon" className="w-24" />
          </a>
          <a href='https://www.linkedin.com/in/arthur-teixeira-santos/' aria-label='LinkedIn_L' className='flex'>
            LinkedIn
            <img src={ LinkedInIcon } alt="LinkedIn_Icon" className="w-24" />
          </a>
    </div>
    <MadeByMeSeal />
    </div>
  </div>
  )
}

export default Contact