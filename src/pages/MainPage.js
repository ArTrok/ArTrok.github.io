import React from 'react';
import NavBar from '../components/NavBar';
// import ProfilePicture from '../images/Linkedin.jpg';
import ProfilePicture2 from '../images/Linkedin.jpg';
import GitHubIcon from '../images/github-original.svg';
import LinkedInIcon from '../images/linkedin-plain.svg';
import MadeByMeSeal from '../components/MadeByMeSeal';
import { motion } from 'framer-motion';
import './MainPage.css';

export default function MainPage() {
  return (
    <div className='bg-planets'>
    <div className='bg-deep-purple bg-opacity-50'>
      <div className="bg-deep-purple bg-opacity-50">
      <NavBar />
        <motion.div animate={{opacity: 1}} initial={{opacity: 0}} transition={{ duration: 1 }} className='main_content_container grid'>

            <motion.h1 whileHover={{ scale: 1.1, rotate: 1}} transition={{ type: "spring", stiffness: 500}} whileTap={{ scale: 0.9, rotate: -1}} id="title" className="text-dark-blue shadow-2xl bg-light-blue rounded-md my-3 text-center p-4">Arthur Teixeira Santos</motion.h1>
            <div className='desc_pic'>
            <motion.p id='description' data-testid="brief_description" whileHover={{ scale: 1.1, rotate: -1}} transition={{ type: "spring", stiffness: 500}} whileTap={{ scale: 0.9, rotate: 1}} className="description text-dark-blue shadow-2xl bg-light-blue rounded-md my-3 p-3">
              Olá, meu nome é Arthur e estou buscando ser reconhecido como desenvolvedor
              através de minhas ações. Na jornada para a realização de um sonho.
            </motion.p>
            <motion.img whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "just", stiffness: 500}} whileTap={{ scale: 0.8, rotate: -5
            }} src={ ProfilePicture2 } alt="Arthur T. Santos's face" id='profile-pic' className="rounded-md mr-5" data-testid="profile_pic" />
            </div>
            <div className='mediaLinks'>
              <motion.a id='iconLink1' whileHover={{ scale: 1.1, rotate: 1}} transition={{ type: "spring", stiffness: 500}} whileTap={{ scale: 0.9, rotate: -1}} href='https://github.com/ArTrok' target="_blank" rel='noreferrer' aria-label='GitHub_L' className='linkContainer justify-around shadow-2xl flex items-center rounded-md my-3 text-dark-blue bg-light-blue p-3'>
                <p>Conheça o meu GitHub</p>
                <img src={ GitHubIcon } alt="GitHub_Icon" className="iconLink" />
              </motion.a>
              <motion.a id='iconLink2' whileHover={{ scale: 1.1, rotate: -1}} transition={{ type: "spring", stiffness: 500}} whileTap={{ scale: 0.9, rotate: 1}} href='https://www.linkedin.com/in/arthur-teixeira-santos/' target="_blank" rel='noreferrer' aria-label='LinkedIn_L' className='linkContainer shadow-2xl justify-around flex items-center rounded-md my-3 text-dark-blue bg-light-blue p-3'>
              <p>Conheça o meu LinkedIn</p>
                <img src={ LinkedInIcon } alt="LinkedIn_Icon" className="iconLink" />
              </motion.a>
            </div>  
        </motion.div>
          </div>
        <MadeByMeSeal />
      </div>
      </div>
  )
}
