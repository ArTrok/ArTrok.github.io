import React from 'react';
import NavBar from '../components/NavBar';
import ProfilePicture from '../images/Linkedin.jpg';
import GitHubIcon from '../images/github-original.svg';
import LinkedInIcon from '../images/linkedin-plain.svg';
import MadeByMeSeal from '../components/MadeByMeSeal';
import { motion } from 'framer-motion';
import './MainPage.css';

export default function MainPage() {
  return (
    <div className='bg-deep-purple bg-planets w-auto'>
      <div className="bg-deep-purple bg-opacity-50">
      <NavBar />
        <div className='main_content_container w-full flex text-xl'>
          <div className='text_content_container flex items-center justify-evenly flex-col mx-20'>
            <motion.h1 whileHover={{ scale: 1.1, rotate: 1}} transition={{ type: "spring", stiffness: 500}} whileTap={{ scale: 0.9, rotate: -1}} id="title" className="text-dark-blue shadow-2xl bg-light-blue text-5xl rounded-md my-3 text-center px-48">Arthur Teixeira Santos</motion.h1>
            <motion.p id='description' data-testid="brief_description" whileHover={{ scale: 1.1, rotate: -1}} transition={{ type: "spring", stiffness: 500}} whileTap={{ scale: 0.9, rotate: 1}} className="description text-dark-blue shadow-2xl bg-light-blue text-3xl rounded-md my-3 text-left px-48">
              Olá, meu nome é Arthur e estou buscando ser reconhecido como desenvolvedor
              através de minhas ações. Na jornada para a realização de um sonho.
            </motion.p>
            <motion.a whileHover={{ scale: 1.1, rotate: 1}} transition={{ type: "spring", stiffness: 500}} whileTap={{ scale: 0.9, rotate: -1}} href='https://github.com/ArTrok' target="_blank" rel='noreferrer' aria-label='GitHub_L' className='justify-around shadow-2xl w-40perc text-2xl h-24 flex items-center rounded-md my-3 text-dark-blue bg-light-blue p-3'>
              <p>Conheça o meu GitHub</p>
              <img src={ GitHubIcon } alt="GitHub_Icon" className="w-24" />
            </motion.a>
            <motion.a whileHover={{ scale: 1.1, rotate: -1}} transition={{ type: "spring", stiffness: 500}} whileTap={{ scale: 0.9, rotate: 1}} href='https://www.linkedin.com/in/arthur-teixeira-santos/' target="_blank" rel='noreferrer' aria-label='LinkedIn_L' className=' h-24 shadow-2xl justify-around w-40perc text-2xl flex items-center rounded-md my-3 text-dark-blue bg-light-blue p-3'>
            <p>Conheça o meu LinkedIn</p>
              <img src={ LinkedInIcon } alt="LinkedIn_Icon" className="w-24" />
            </motion.a>
          </div>
          <motion.img whileHover={{ scale: 1.1, rotate: 5, x: -100 }} transition={{ type: "just", stiffness: 500}} whileTap={{ scale: 0.8, rotate: -5
          }} src={ ProfilePicture } alt="Arthur T. Santos's face" id='profile-pic' className="h-picsize rounded-md mr-5" data-testid="profile_pic" />
          </div>
        <MadeByMeSeal />
      </div>
    </div>
  )
}
