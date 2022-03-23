import React, { useEffect, useState, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom';
import HomePageIcon from '../images/wavyLirik.gif'; 
import AboutPageIcon from '../images/meLirik.png'; 
import ProjectsPageIcon from '../images/Hackermans.gif'; 
import SkillsPageIcon from '../images/tiLirik.png'; 
import ContactPageIcon from '../images/lirikHullo.png';
import MenuIcon from '../images/MenuIcon.svg';
import AppContext from '../context/ContextAPI';
import './NavBar.css';
import { motion } from 'framer-motion';

const NavBar = () => {
  const { language, setLanguage } = useContext(AppContext);
  const location = useLocation();
  const [pageIcon, setPageIcon] = useState();
  const [pageName, setPageName] = useState('');
  const langs = ['english', 'portuguese'];
  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setPageIcon(HomePageIcon);
        setPageName(language === 'portuguese' ? 'Home' : 'Home')
        break;
      case '/about':
        setPageIcon(AboutPageIcon);
        setPageName(language === 'portuguese' ? 'Sobre Mim' : 'About')
        break;
      case '/projects':
        setPageIcon(ProjectsPageIcon);
        setPageName(language === 'portuguese' ? 'Projetos' : 'Projects')
        break;
      case '/skills':
        setPageIcon(SkillsPageIcon);
        setPageName(language === 'portuguese' ? 'Habilidades' : 'Skills')
        break;
      case '/contact':
        setPageIcon(ContactPageIcon);
        setPageName(language === 'portuguese' ? 'Contato' : 'Contact')
        break;
            
      default:
        break;
    }
  }, [location.pathname, language]);

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
    const langButton = document.getElementById('langButton');
    navLinks.classList.toggle('show');
    menuEmote.classList.toggle('show');
    pageRoute.classList.toggle('hide');
    langButton.classList.toggle('show')
  }

  function toggleLang () {
    if (language === 'portuguese') setLanguage(langs[0]);
    if (language === 'english') setLanguage(langs[1]);
  }

  return (
    <motion.nav variants={skillVariantMain} animate="visible" initial="hidden" className="navBar text-cream bg-other-purple bg-opacity-75" >
      <button onClick={() => toggleMenu()} className="menuIcon" id="menuIcon"><img src={MenuIcon} alt="Menu Icon" /></button>
      <div className="pageRoute text-cream" id="pageRoute">{pageName}</div>
      <div className='navLinks' id='navLinks'>
        <Link variants={skillVariant} animate="visible" initial="hidden" to="/" className='nav-button1' data-testid="Home_b">
        <motion.div className=' rounded-md bg-dark-blue shadow-2xl' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} transition={{ stiffness: 400, type: 'spring'}}>
          {language === 'portuguese' ? 'Home' : 'Home'}
        </motion.div>
        </Link>
        <Link variants={skillVariant} animate="visible" initial="hidden" to="/about" className='nav-button2' data-testid="About_b">
        <motion.div className=' rounded-md bg-dark-blue shadow-2xl' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} transition={{ stiffness: 400, type: 'spring'}}>
          {language === 'portuguese' ? 'Sobre' : 'About'}
        </motion.div>
        </Link>
        <Link variants={skillVariant} animate="visible" initial="hidden" to="/projects" className='nav-button3' data-testid="Projects_b">
        <motion.div className=' rounded-md bg-dark-blue shadow-2xl' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} transition={{ stiffness: 400, type: 'spring'}}>
          {language === 'portuguese' ? 'Projetos' : 'Projects'}
        </motion.div>
        </Link>
        <Link variants={skillVariant} animate="visible" initial="hidden" to="/skills" className='nav-button4' data-testid="Skills_b">
        <motion.div className=' rounded-md bg-dark-blue shadow-2xl' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} transition={{ stiffness: 400, type: 'spring'}}>
          {language === 'portuguese' ? 'Habilidades' : 'Skills'}
        </motion.div>
        </Link>
        <Link variants={skillVariant} animate="visible" initial="hidden" to="/contact" className='nav-button5' data-testid="Contact_b">
        <motion.div className=' rounded-md bg-dark-blue shadow-2xl' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} transition={{ stiffness: 400, type: 'spring'}}>
          {language === 'portuguese' ? 'Contato' : 'Contact'}
        </motion.div>
        </Link>

      </div>
        <motion.img className='nav-button0' id='menuEmote' whileHover={{ scale: 1.2 }} transition={{ type: 'spring', stiffness: 500}} whileTap={{ scale: 0.8, rotate: -3 }} alt="Emote regarding page" src={ pageIcon } aria-label="pageEmote" />
        <button className='langButton p-1' id='langButton' onClick={toggleLang}>{ language === 'portuguese' ? 'EN/US' : 'PT/BR'}</button>
  </motion.nav>
  )
}

export default NavBar