import React from 'react'
import MadeByMeSeal from '../components/MadeByMeSeal'
import NavBar from '../components/NavBar'
import GitHubIcon from '../images/github-original.svg';
import LinkedInIcon from '../images/linkedin-plain.svg';
import './Contact.css';
import { motion } from 'framer-motion';

const Contact = () => {
  const skillVariantMain = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
      }
    }
  };

  return (
    <div className='bg-planets'>
    <div className="bg-deep-purple bg-opacity-50">

    <NavBar />
    <motion.div variants={skillVariantMain} animate="visible" initial="hidden" className='main_content_container5 gap-5 p-3 justify-items-center bg-light-blue rounded-md'>
      <motion.h2 animate={{opacity: 1}} initial={{opacity: 0}} data-testid="ContactMe" className='text-dark-blue font-bold text-4xl'>Entre em Contato</motion.h2>
      <motion.input animate={{opacity: 1}} initial={{opacity: 0}} style={{opacity: 1, width: "216px"}} type="text" aria-label='Name' placeholder='Nome Completo' id='name' className='bg-dark-blue text-cream h-10 rounded-md p-2 name'/>
      <motion.input animate={{opacity: 1}} initial={{opacity: 0}} type="email" aria-label="Email" placeholder='E-Mail' id="email" className='bg-dark-blue text-cream rounded-md p-2'/>
      <div className='message_container'>
        <motion.textarea animate={{opacity: 1}} initial={{opacity: 0}} aria-label="Message" id="message" rows="4" cols="45" placeholder='Mensagem' className='message resize-none bg-dark-blue text-cream rounded-md p-2 self-stretch' />
      </div>
      <motion.button onClick={() => alert("Não implementado ainda. Fale comigo pelas redes sociais abaixo.")} animate={{opacity: 1}} initial={{opacity: 0}} whileHover={{ scale: 1.1, rotate: -3}} transition={{ type: "spring", stiffness: 2000}} whileTap={{ scale: 0.9, rotate: 3}} aria-label='Send_It' className='text-beige-green bg-dark-blue w-40 rounded-md font-bold send'>Enviar</motion.button>
      <div className="flex gap-5">
        <motion.a animate={{opacity: 1}} initial={{opacity: 0}} whileHover={{ scale: 1.1, rotate: 1}} transition={{ type: "spring", stiffness: 500}} whileTap={{ scale: 0.9, rotate: -1}} href='https://github.com/ArTrok' target="_blank" rel='noreferrer' aria-label='GitHub_L' className='flex items-center border-2 border-cream shadow-xl p-1 rounded-md link_button'>
        GitHub
          <img src={ GitHubIcon } alt="GitHub_Icon" className="ml-3" />
        </motion.a>
        <motion.a animate={{opacity: 1}} initial={{opacity: 0}} whileHover={{ scale: 1.1, rotate: 1}} transition={{ type: "spring", stiffness: 500}} whileTap={{ scale: 0.9, rotate: -1}} href='https://www.linkedin.com/in/arthur-teixeira-santos/' target="_blank" rel='noreferrer' aria-label='LinkedIn_L' className='flex items-center border-2 border-cream shadow-xl p-1 rounded-md link_button'>
        LinkedIn
          <img src={ LinkedInIcon } alt="LinkedIn_Icon" className="ml-3" />
        </motion.a>
      </div>
    </motion.div>
    <MadeByMeSeal />
    </div>
  </div>
  )
}

export default Contact