import React from 'react';
import { motion } from 'framer-motion';
import './SoftSkills.css';

const SoftSkils = ({iconsSoft}) => {
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
        delay: 0.4,
        staggerChildren: 1,
      }
    }
  };
  return (
    <motion.div variants={skillVariantMain} animate="visible" initial="hidden" className="soft_skills_container">
    <h2 className='bg-dark-blue text-cream soft_skills_title text-center text-3xl font-bold  w-full rounded-xl'>Soft Skills</h2>
    {iconsSoft.map((icon, index) => {
      return (
        <motion.div variants={skillVariant} animate="visible" initial="hidden" drag dragConstraints={{ left: 30, right: 30, top: 30, bottom: 30}} whileHover={{ scale: 1.1, rotate: -3}} transition={{ type: "spring", stiffness: 500}} whileTap={{ scale: 0.9, rotate: 3}} key={index} className={`icon_container${index}s text-dark-blue bg-light-blue p-3
        rounded-2xl w-32 h-auto`}>
        <img src={icon.link} alt={icon.text} />
        <p className='skill_name font-bold'>{icon.text}</p>
      </motion.div>)
    })}
    </motion.div>
  )
}

export default SoftSkils