import React from 'react';
import { motion } from 'framer-motion';
import GitHubIcon from '../images/github-original.svg';
import LinkedInIcon from '../images/linkedin-plain.svg';

const MainPageLinks = () => {
  return (
    <div className='mediaLinks'>
    <motion.a id='iconLink1' whileHover={{ scale: 1.1, rotate: 1}} transition={{ type: "spring", stiffness: 500}} whileTap={{ scale: 0.9, rotate: -1}} href='https://github.com/ArTrok' target="_blank" rel='noreferrer' aria-label='GitHub_L' className='linkContainer justify-around shadow-2xl flex items-center rounded-md my-3 text-cream bg-deep-purple p-3'>
      <p>Conheça o meu GitHub</p>
      <img src={ GitHubIcon } alt="GitHub_Icon" className="iconLink" />
    </motion.a>
    <motion.a id='iconLink2' whileHover={{ scale: 1.1, rotate: -1}} transition={{ type: "spring", stiffness: 500}} whileTap={{ scale: 0.9, rotate: 1}} href='https://www.linkedin.com/in/arthur-teixeira-santos/' target="_blank" rel='noreferrer' aria-label='LinkedIn_L' className='linkContainer shadow-2xl justify-around flex items-center rounded-md my-3 text-cream bg-deep-purple p-3'>
    <p>Conheça o meu LinkedIn</p>
      <img src={ LinkedInIcon } alt="LinkedIn_Icon" className="iconLink" />
    </motion.a>
  </div>  
  )
}

export default MainPageLinks