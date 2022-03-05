import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import HomePageIcon from '../images/wavyLirik.gif'; 
import AboutPageIcon from '../images/meLirik.png'; 
import ProjectsPageIcon from '../images/Hackermans.gif'; 
import SkillsPageIcon from '../images/tiLirik.png'; 
import ContactPageIcon from '../images/lirikHullo.png';
import './NavBar.css';
import { motion } from 'framer-motion';

const NavBar = () => {
  const location = useLocation();
  const [pageIcon, setPageIcon] = useState();
  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setPageIcon(HomePageIcon);
        break;
      case '/about':
        setPageIcon(AboutPageIcon);
        break;
      case '/projects':
        setPageIcon(ProjectsPageIcon);
        break;
      case '/skills':
        setPageIcon(SkillsPageIcon);
        break;
      case '/contact':
        setPageIcon(ContactPageIcon);
        break;
            
      default:
        break;
    }
  }, [location.pathname]);

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
      y: -50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.1,
        staggerChildren: 1,
      }
    }
  };

  return (
    <motion.nav variants={skillVariantMain} animate="visible" initial="hidden" className="text-cream bg-light-blue" >
      <motion.img className='nav-button0' whileHover={{ scale: 1.2 }} transition={{ type: 'spring', stiffness: 500}} whileTap={{ scale: 0.8, rotate: -3 }} alt="Emote regarding page" src={ pageIcon } aria-label="pageEmote" />
      <Link variants={skillVariant} animate="visible" initial="hidden" to="/" className='nav-button1' data-testid="Home_b">
      <motion.div className=' rounded-md bg-dark-blue shadow-2xl' whileHover={{ scale: 1.1, rotate: 3 }} whileTap={{ scale: 0.8, rotate: -3 }} transition={{ stiffness: 500, type: 'spring'}}>
        Home
      </motion.div>
      </Link>
      <Link variants={skillVariant} animate="visible" initial="hidden" to="/about" className='nav-button2' data-testid="About_b">
      <motion.div className=' rounded-md bg-dark-blue shadow-2xl' whileHover={{ scale: 1.1, rotate: 3 }} whileTap={{ scale: 0.8, rotate: -3 }} transition={{ stiffness: 500, type: 'spring'}}>
        Sobre
      </motion.div>
      </Link>
      <Link variants={skillVariant} animate="visible" initial="hidden" to="/projects" className='nav-button3' data-testid="Projects_b">
      <motion.div className=' rounded-md bg-dark-blue shadow-2xl' whileHover={{ scale: 1.1, rotate: 3 }} whileTap={{ scale: 0.8, rotate: -3 }} transition={{ stiffness: 500, type: 'spring'}}>
        Projetos
      </motion.div>
      </Link>
      <Link variants={skillVariant} animate="visible" initial="hidden" to="/skills" className='nav-button4' data-testid="Skills_b">
      <motion.div className=' rounded-md bg-dark-blue shadow-2xl' whileHover={{ scale: 1.1, rotate: 3 }} whileTap={{ scale: 0.8, rotate: -3 }} transition={{ stiffness: 500, type: 'spring'}}>
        Habilidades
      </motion.div>
      </Link>
      <Link variants={skillVariant} animate="visible" initial="hidden" to="/contact" className='nav-button5' data-testid="Contact_b">
      <motion.div className=' rounded-md bg-dark-blue shadow-2xl' whileHover={{ scale: 1.1, rotate: 3 }} whileTap={{ scale: 0.8, rotate: -3 }} transition={{ stiffness: 500, type: 'spring'}}>
        Contato
      </motion.div>
      </Link>
  </motion.nav>
  )
}

export default NavBar