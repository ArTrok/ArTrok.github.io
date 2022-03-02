import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import HomePageIcon from '../images/wavyLirik.gif'; 
import AboutPageIcon from '../images/meLirik.png'; 
import ProjectsPageIcon from '../images/Hackermans.gif'; 
import SkillsPageIcon from '../images/tiLirik.png'; 
import ContactPageIcon from '../images/lirikHullo.png'; 

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
    <nav className="flex justify-around text-4xl items-center text-center w-full mb-20 text-cream bg-light-blue gap-10" >
      <img className="" alt="Emote regarding page" src={ pageIcon } aria-label="pageEmote" />
      <Link to="/" className='nav-button rounded-2xl w-56 h-20 text-center bg-dark-blue pt-2 font-bold' data-testid="Home_b">
        Home
      </Link>
      <Link to="/about" className='nav-button rounded-2xl w-56 h-20 text-center bg-dark-blue pt-2 font-bold' data-testid="About_b">
        Sobre
      </Link>
      <Link to="/projects" className='nav-button rounded-2xl w-56 h-20 text-center bg-dark-blue pt-2 font-bold' data-testid="Projects_b">
        Projetos
      </Link>
      <Link to="/skills" className='nav-button rounded-2xl w-56 h-20 text-center bg-dark-blue pt-2 font-bold' data-testid="Skills_b">
        Habilidades
      </Link>
      <Link to="/contact" className='nav-button rounded-2xl w-56 h-20 text-center bg-dark-blue pt-2 font-bold' data-testid="Contact_b">
        Contato
      </Link>
  </nav>
  )
}

export default NavBar