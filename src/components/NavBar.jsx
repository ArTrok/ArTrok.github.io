import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import HomePageIcon from '../images/wavyLirik.gif'; 
import AboutPageIcon from '../images/meLirik.png'; 
import ProjectsPageIcon from '../images/Hackermans.gif'; 
import SkillsPageIcon from '../images/tiLirik.png'; 
import ContactPageIcon from '../images/lirikHullo.png';
import MenuIcon from '../images/MenuIcon.svg';
import './NavBar.css';
import { motion } from 'framer-motion';

const NavBar = () => {
  const location = useLocation();
  const [pageIcon, setPageIcon] = useState();
  const [pageName, setPageName] = useState('');
  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setPageIcon(HomePageIcon);
        setPageName('Home')
        break;
      case '/about':
        setPageIcon(AboutPageIcon);
        setPageName('Sobre Mim')
        break;
      case '/projects':
        setPageIcon(ProjectsPageIcon);
        setPageName('Projetos')
        break;
      case '/skills':
        setPageIcon(SkillsPageIcon);
        setPageName('Habilidades')
        break;
      case '/contact':
        setPageIcon(ContactPageIcon);
        setPageName('Contato')
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

  function toggleMenu () {
    const navLinks = document.getElementById('navLinks');
    const menuEmote = document.getElementById('menuEmote');
    const pageRoute = document.getElementById('pageRoute');
    navLinks.classList.toggle('show');
    menuEmote.classList.toggle('show');
    pageRoute.classList.toggle('hide');
  }

  return (
    <motion.nav variants={skillVariantMain} animate="visible" initial="hidden" className="navBar text-cream bg-light-blue bg-opacity-75" >
      <button onClick={() => toggleMenu()} className="menuIcon" id="menuIcon"><img src={MenuIcon} alt="Menu Icon" /></button>
      <div className="pageRoute text-dark-blue" id="pageRoute">{pageName}</div>
      <div className='navLinks' id='navLinks'>
        <Link variants={skillVariant} animate="visible" initial="hidden" to="/" className='nav-button1' data-testid="Home_b">
        <motion.div className=' rounded-md bg-dark-blue shadow-2xl' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8, rotate: -3 }} transition={{ stiffness: 500, type: 'spring'}}>
          Home
        </motion.div>
        </Link>
        <Link variants={skillVariant} animate="visible" initial="hidden" to="/about" className='nav-button2' data-testid="About_b">
        <motion.div className=' rounded-md bg-dark-blue shadow-2xl' whileHover={{ scale: 1.1, backgroundColor: '#0084C1' }} whileTap={{ scale: 0.8, rotate: -3 }} transition={{ stiffness: 200, type: 'spring'}}>
          Sobre
        </motion.div>
        </Link>
        <Link variants={skillVariant} animate="visible" initial="hidden" to="/projects" className='nav-button3' data-testid="Projects_b">
        <motion.div className=' rounded-md bg-dark-blue shadow-2xl' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8, rotate: -3 }} transition={{ stiffness: 500, type: 'spring'}}>
          Projetos
        </motion.div>
        </Link>
        <Link variants={skillVariant} animate="visible" initial="hidden" to="/skills" className='nav-button4' data-testid="Skills_b">
        <motion.div className=' rounded-md bg-dark-blue shadow-2xl' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8, rotate: -3 }} transition={{ stiffness: 500, type: 'spring'}}>
          Habilidades
        </motion.div>
        </Link>
        <Link variants={skillVariant} animate="visible" initial="hidden" to="/contact" className='nav-button5' data-testid="Contact_b">
        <motion.div className=' rounded-md bg-dark-blue shadow-2xl' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8, rotate: -3 }} transition={{ stiffness: 500, type: 'spring'}}>
          Contato
        </motion.div>
        </Link>

      </div>
      <motion.img className='nav-button0' id='menuEmote' whileHover={{ scale: 1.2 }} transition={{ type: 'spring', stiffness: 500}} whileTap={{ scale: 0.8, rotate: -3 }} alt="Emote regarding page" src={ pageIcon } aria-label="pageEmote" />
  </motion.nav>
  )
}

export default NavBar