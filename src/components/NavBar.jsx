import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import HomePageIcon from '../images/wavyLirik.gif'; 
import AboutPageIcon from '../images/meLirik.png'; 
import ProjectsPageIcon from '../images/Hackermans.gif'; 
import SkillsPageIcon from '../images/tiLirik.png'; 
import ContactPageIcon from '../images/lirikHullo.png'; 
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
  }, [location.pathname])
  return (
    <nav className="flex justify-around text-4xl items-center text-center w-full mb-20 text-cream bg-light-blue" >
      <motion.img whileHover={{ scale: 1.2 }} transition={{ type: 'spring', stiffness: 500}} whileTap={{ scale: 0.8, rotate: -3 }} alt="Emote regarding page" src={ pageIcon } aria-label="pageEmote" />
      <Link to="/" className='nav-button font-bold' data-testid="Home_b">
      <motion.div className='bg-dark-blue h-20 rounded-2xl w-56' whileHover={{ scale: 1.1, rotate: 3 }} whileTap={{ scale: 0.8, rotate: -3 }} transition={{ stiffness: 500, type: 'spring'}}>
        Home
      </motion.div>
      </Link>
      <Link to="/about" className='nav-button font-bold' data-testid="About_b">
      <motion.div className='bg-dark-blue h-20 rounded-2xl w-56' whileHover={{ scale: 1.1, rotate: 3 }} whileTap={{ scale: 0.8, rotate: -3 }} transition={{ stiffness: 500, type: 'spring'}}>
        Sobre
      </motion.div>
      </Link>
      <Link to="/projects" className='nav-button font-bold' data-testid="Projects_b">
      <motion.div className='bg-dark-blue h-20 rounded-2xl w-56' whileHover={{ scale: 1.1, rotate: 3 }} whileTap={{ scale: 0.8, rotate: -3 }} transition={{ stiffness: 500, type: 'spring'}}>
        Projetos
      </motion.div>
      </Link>
      <Link to="/skills" className='nav-button font-bold' data-testid="Skills_b">
      <motion.div className='bg-dark-blue h-20 rounded-2xl w-56' whileHover={{ scale: 1.1, rotate: 3 }} whileTap={{ scale: 0.8, rotate: -3 }} transition={{ stiffness: 500, type: 'spring'}}>
        Habilidades
      </motion.div>
      </Link>
      <Link to="/contact" className='nav-button font-bold' data-testid="Contact_b">
      <motion.div className='bg-dark-blue h-20 rounded-2xl w-56 ' whileHover={{ scale: 1.1, rotate: 3, x: -50 }} whileTap={{ scale: 0.8, rotate: -3 }} transition={{ stiffness: 500, type: 'just'}}>
        Contato
      </motion.div>
      </Link>
  </nav>
  )
}

export default NavBar