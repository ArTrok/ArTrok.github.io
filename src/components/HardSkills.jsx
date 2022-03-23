import React from 'react';
import { motion } from 'framer-motion';
import './HardSkills.css';

const HardSkills = ({icons}) => {
  const skillVariant = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    }
  };

  const skillVariantMain = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        staggerChildren: 1,
      }
    }
  };

  return (
    <motion.div variants={skillVariantMain} animate="visible" initial="hidden" className='hard_skills_container'>
        <h2 className='bg-dark-blue text-cream hard_skills_title font-bold text-3xl text-center rounded-xl w-full'>Hard Skills</h2>
    {icons.map((icon, index) => {
      return (
        <motion.div variants={skillVariant} animate="visible" initial="hidden" drag dragConstraints={{ left: 30, right: 30, top: 30, bottom: 30}} whileHover={{ scale: 1.1, rotate: 3}} transition={{ type: "spring", stiffness: 500}} whileTap={{ scale: 0.9, rotate: -3}} key={index} className={`icon_limit icon_container${index}h text-dark-blue bg-light-blue p-3
         rounded-2xl w-32 h-auto`}>
        <img src={icon.link} alt={icon.alt} />
        <p className='skill_name font-bold text-cream'>{icon.name}</p>
      </motion.div>)
    })}
    </motion.div>
  )
}

export default HardSkills