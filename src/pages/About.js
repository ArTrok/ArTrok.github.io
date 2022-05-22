import React, { useContext } from 'react';
import MadeByMeSeal from '../components/MadeByMeSeal';
import NavBar from '../components/NavBar';
import { motion } from 'framer-motion';
import './About.css';
import Content1MainPage from '../components/Content1AboutPage';
import Content2AboutPage from '../components/Content2AboutPage';
import Content3AboutPage from '../components/Content3AboutPage';
import AppContext from '../context/ContextAPI';

const About = () => {
  const { language } = useContext(AppContext);
  return (
    <div className="bg-planets">
    <div className="bg-deep-purple bg-opacity-50">

    <NavBar />
    <div className='main_content_container2 w-11/12 text-cream p-1'>
      <motion.p
        whileHover={{scale: 1.1, rotate: 1}}
        whileTap={{scale: 0.9, rotate: -1}}
        animate={{opacity: 1}}
        initial={{opacity: 0.1}}
        className='About_me bg-deep-purple text-center rounded-md'>{language === 'portuguese' ? 'Sobre Mim' : 'About Me'}
      </motion.p>
      <div className='content1'>
        <Content1MainPage language={language} />
      </div>
      <div className='content2'>
        <Content2AboutPage language={language} />
      </div>
      <div className='content3'>
        <Content3AboutPage language={language} />
      </div>
    </div>
    <MadeByMeSeal />
    </div>
    </div>
  );
};

export default About;
