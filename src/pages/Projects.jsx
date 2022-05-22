import React from 'react';
import Carousel from '../components/Carousel';
import MadeByMeSeal from '../components/MadeByMeSeal';
import NavBar from '../components/NavBar';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div className="bg-planets">
    <div className="bg-deep-purple bg-opacity-50">
      <NavBar />
      <motion.div animate={{opacity: 1}} initial={{opacity: 0}} transition={{ duration: 0.4 }} className='main_content_container3'>
      <Carousel />
      </motion.div>
      <MadeByMeSeal />
    </div>
    </div>
  )
}

export default Projects
