import React from 'react'
import MadeByMeSeal from '../components/MadeByMeSeal'
import NavBar from '../components/NavBar'
import GitHubIcon from '../images/github-original.svg';
import LinkedInIcon from '../images/linkedin-plain.svg';
import './Contact.css';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className='bg-planets'>
    <div className="bg-deep-purple bg-opacity-50">

    <NavBar />
    <div className='main_content_container grid gap-5 p-3 w-50perc justify-items-center text-2xl bg-light-blue rounded-md'>
      <h2 data-testid="ContactMe" className='text-dark-blue font-bold text-4xl'>Entre em Contato</h2>
      <input type="text" aria-label='Name' placeholder='Nome Completo' className='bg-dark-blue text-cream rounded-md p-2'/>
      <input type="email" aria-label="Email" placeholder='E-Mail' id="email" className='bg-dark-blue w-2/4 text-cream rounded-md p-2'/>
      <textarea aria-label="Message" id="message" placeholder='Mensagem' cols="60" rows="5" className='resize-none bg-dark-blue text-cream rounded-md p-2'></textarea>
      <motion.button whileHover={{ scale: 1.1, rotate: -3}} transition={{ type: "spring", stiffness: 2000}} whileTap={{ scale: 0.9, rotate: 3}} aria-label='Send_It' className='text-beige-green bg-dark-blue w-40 rounded-md font-bold'>Enviar</motion.button>
      <div className="flex gap-5">
        <motion.a whileHover={{ scale: 1.1, rotate: 1}} transition={{ type: "spring", stiffness: 500}} whileTap={{ scale: 0.9, rotate: -1}} href='https://github.com/ArTrok' target="_blank" rel='noreferrer' aria-label='GitHub_L' className='flex items-center border-2 border-cream shadow-xl p-1 rounded-md'>
        GitHub
          <img src={ GitHubIcon } alt="GitHub_Icon" className="w-24 ml-5" />
        </motion.a>
        <motion.a whileHover={{ scale: 1.1, rotate: 1}} transition={{ type: "spring", stiffness: 500}} whileTap={{ scale: 0.9, rotate: -1}} href='https://www.linkedin.com/in/arthur-teixeira-santos/' target="_blank" rel='noreferrer' aria-label='LinkedIn_L' className='flex items-center border-2 border-cream shadow-xl p-1 rounded-md'>
        LinkedIn
          <img src={ LinkedInIcon } alt="LinkedIn_Icon" className="w-24 ml-5" />
        </motion.a>
      </div>
    </div>
    <MadeByMeSeal />
    </div>
  </div>
  )
}

export default Contact