import React, { useState, useContext } from 'react';
import MadeByMeSeal from '../components/MadeByMeSeal';
import NavBar from '../components/NavBar';
import GitHubIcon from '../images/github-original.svg';
import LinkedInIcon from '../images/linkedin-plain.svg';
import './Contact.css';
import AppContext from '../context/ContextAPI';
import { motion } from 'framer-motion';
import Axios from 'axios';

const Contact = () => {
  const { language } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [messageSent, setMessageSent] = useState('');
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

  function handleChangeEmail ({target}) {
    setEmail(target.value);
  }

  function handleChangeName ({target}) {
    setName(target.value);
  }

  function handleChangeMessage ({target}) {
    setMessage(target.value);
  }

  function sendEmail () {
    const emailChecking = /^([a-z\d._-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i
      .test(email);
    const nameChecking = name.length > 3;
    const messageChecking = message.length >= 50;

    if (!nameChecking) return setMessageSent(language === 'portuguese' ? 'Nome precisa ter mais de 3 caracteres' : 'The name must have more than 3 characters');
    if (!emailChecking) return setMessageSent(language === 'portuguese' ? 'Insira um e-mail válido' : 'Enter a valid email');
    if (!messageChecking) return setMessageSent(language === 'portuguese' ? 'Mensagem precisa ter pelo menos 50 caracteres' : 'The message must have more than 50 characters');
    Axios.post(process.env.REACT_APP_ENDPOINT_EMAIL, {email, message, name})
      .then(res => {
        if(res.data.success) {
          setMessageSent(language === 'portuguese' ? 'Mensagem enviada com sucesso!' : 'Message sent with success!');
        } else {
          setMessageSent(language === 'portuguese' ? 'Erro: Mensagem não enviada, tente novamente.' : 'Error: Message not sent, please try again.');
        }
      })
      .catch(err => {
        console.log(err);
        setMessageSent(language === 'portuguese' ? 'Erro: Mensagem não enviada, tente novamente.' : 'Error: Message not sent, please try again.');
      });
      setMessageSent(language === 'portuguese' ? 'Mensagem enviada com sucesso!' : 'Message sent with success!');
  };

  return (
    <div className='bg-planets'>
    <div className="bg-deep-purple bg-opacity-50">

    <NavBar />
    <motion.div variants={skillVariantMain} animate="visible" initial="hidden" className='main_content_container5 gap-5 p-3 justify-items-center bg-deep-purple rounded-md'>
      <motion.h2 animate={{opacity: 1}} initial={{opacity: 0}} data-testid="ContactMe" className='text-cream font-bold text-4xl'>{language === 'portuguese' ? 'Entre em Contato' : 'Contact Me'}</motion.h2>
      <motion.input onChange={handleChangeName} animate={{opacity: 1}} initial={{opacity: 0}} style={{opacity: 1, width: "216px"}} type="text" aria-label='Name' placeholder={language === 'portuguese' ? 'Nome Completo' : 'Full Name'} id='name' className='bg-light-blue text-cream h-10 rounded-md p-2 name'/>
      <motion.input onChange={handleChangeEmail} animate={{opacity: 1}} initial={{opacity: 0}} type="email" aria-label="Email" placeholder='E-Mail' id="email" className='bg-light-blue text-cream rounded-md p-2'/>
        <div className="message rounded-md p-2 flex flex-col">
        <motion.textarea onChange={handleChangeMessage} animate={{opacity: 1}} initial={{opacity: 0}} aria-label="Message" id="message" rows="4" cols="45" placeholder={language === 'portuguese' ? 'Mensagem' : 'Message'} className='resize-none bg-light-blue text-cream rounded self-stretch p-2' />
        <div className="text-cream self-end">{message.length} {language === 'portuguese' ? 'caracteres' : 'characters'}</div>
        </div> 
      <motion.button onClick={sendEmail} animate={{opacity: 1}} initial={{opacity: 0}} whileHover={{ scale: 1.1, rotate: -3}} transition={{ type: "spring", stiffness: 2000}} whileTap={{ scale: 0.9, rotate: 3}} aria-label='Send_It' className='text-beige-green bg-light-blue w-40 rounded-md font-bold send'>{language === 'portuguese' ? 'Enviar' : 'Submit'}</motion.button>
      <div className='text-cream'>{messageSent}</div>
      <p className='text-cream emailText'>email: arthurteixeira0805@gmail.com</p>
      <div className="flex gap-5">
        <motion.a animate={{opacity: 1}} initial={{opacity: 0}} whileHover={{ scale: 1.1, rotate: 1}} transition={{ type: "spring", stiffness: 500}} whileTap={{ scale: 0.9, rotate: -1}} href='https://github.com/ArTrok' target="_blank" rel='noreferrer' aria-label='GitHub_L' className='flex items-center border-2 border-cream text-cream bg-light-blue shadow-xl p-1 rounded-md link_button'>
        GitHub
          <img src={ GitHubIcon } alt="GitHub_Icon" className="ml-3" />
        </motion.a>
        <motion.a animate={{opacity: 1}} initial={{opacity: 0}} whileHover={{ scale: 1.1, rotate: 1}} transition={{ type: "spring", stiffness: 500}} whileTap={{ scale: 0.9, rotate: -1}} href='https://www.linkedin.com/in/arthur-teixeira-santos/' target="_blank" rel='noreferrer' aria-label='LinkedIn_L' className='flex items-center border-2 border-cream text-cream bg-light-blue shadow-xl p-1 rounded-md link_button'>
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