import React, { useEffect, useState } from 'react';
import leftArrow from '../images/leftArrow.svg';
import rightArrow from '../images/rightArrow.svg';
import project1 from '../images/recipesApp.gif';
import project2 from '../images/recipesApp2.gif';
import project3 from '../images/recipesApp3.gif';
import { motion } from 'framer-motion';

const arrOfProjects = [{project: project1, alt: 'Project1', link: 'https://github.com/RaphaelTaglialegna/Recipes-App/tree/main' },
 {project: project2, alt: 'Project2', link: 'https://github.com/RaphaelTaglialegna/Recipes-App/tree/main' },
 {project: project3, alt: 'Project3', link: 'https://github.com/RaphaelTaglialegna/Recipes-App/tree/main' }];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  function previousProj() {
    const INDEX_LIMIT = 2;
    setCurrent(current === 0 ? INDEX_LIMIT : current - 1);
  }

  function nextProj() {
    const INDEX_LIMIT = 2;
    setCurrent(current === INDEX_LIMIT ? 0 : current + 1);
  }

  useEffect(() => {

  }, [current]);

  return (
    <div className='flex justify-center'>
      <motion.button whileHover={{scale: 1.1}} onClick={ previousProj } className="w-20 bg-opacity-50 bg-cream">
        <img src={ leftArrow } alt="leftArrow" className="w-20"/>
      </motion.button>
      <a href={arrOfProjects[current].link} className='images_container w-11/12 justify-evenly p-5 flex bg-opacity-50 bg-cream'>
        <img src={arrOfProjects[current].project} alt={arrOfProjects[current].alt} className="rounded-md" />
      </a>
      <motion.button whileHover={{scale: 1.1}} onClick={ nextProj } className="w-20 bg-opacity-50 bg-cream">
        <img src={ rightArrow } alt="rightArrow" className="w-20"/>
      </motion.button>
    </div>
  )
}

export default Carousel