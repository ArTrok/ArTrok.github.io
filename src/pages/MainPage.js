import React from 'react';
import NavBar from '../components/NavBar';
import ProfilePicture from '../images/Linkedin.jpg';
import MadeByMeSeal from '../components/MadeByMeSeal';
import { motion } from 'framer-motion';
import './MainPage.css';
import MainPageLinks from '../components/MainPageLinks';

// WILL BE USING CONTEXT API TO CHOOSE LANGUAGE OF THE ENTIRE PAGE

export default function MainPage() {
  return (
    <div className='bg-planets'>
    <div className='bg-deep-purple bg-opacity-50'>
      <div className="bg-deep-purple bg-opacity-50">
      <NavBar />
        <motion.div animate={{opacity: 1}} initial={{opacity: 0}} transition={{ duration: 1 }} className='main_content_container grid'>

            <motion.h1 whileHover={{ scale: 1.1, rotate: 1}} transition={{ type: "spring", stiffness: 500}} whileTap={{ scale: 0.9, rotate: -1}} id="title" className="text-cream shadow-2xl bg-deep-purple rounded-md my-3 text-center p-4">Arthur Teixeira Santos</motion.h1>
            <div className='desc_pic'>
            <motion.p id='description' data-testid="brief_description" whileHover={{ scale: 1.1, rotate: -1}} transition={{ type: "spring", stiffness: 500}} whileTap={{ scale: 0.9, rotate: 1}} className="description text-cream shadow-2xl bg-deep-purple rounded-md my-3 p-3">
            Olá! Estou na jornada para a realização de um sonho. Me tornar um desenvolvedor melhor a cada dia na área da tecnologia.
            </motion.p>
            <motion.img whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "just", stiffness: 500}} whileTap={{ scale: 0.8, rotate: -5
            }} src={ ProfilePicture } alt="Arthur T. Santos's face" id='profile-pic' className="rounded-md picture-profile profile-picture lockdown-pic" data-testid="profile_pic" />
            </div>
            <MainPageLinks />
        </motion.div>
          </div>
        <MadeByMeSeal />
      </div>
      </div>
  )
}
