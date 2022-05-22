import React, { useEffect, useState } from 'react';
import leftArrow from '../images/leftArrow.svg';
import rightArrow from '../images/rightArrow.svg';
import project1 from '../images/recipesApp.gif';
import project2 from '../images/ToDoList.gif';
import project3 from '../images/recipesApp3.gif';
import { motion } from 'framer-motion';
import './Carousel.css';

const arrOfProjects = [{project: project1, alt: 'Recipes App', link: 'https://github.com/RaphaelTaglialegna/Recipes-App/tree/main' },
 {project: project2, alt: 'To Do List App', link: 'https://github.com/ArTrok/To-Do-List' },
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
    <>
      <div className='carousel'>
        <motion.button whileHover={{scale: 1.1}} onClick={ previousProj } className="arrowL bg-opacity-50 bg-cream">
          <img src={ leftArrow } alt="leftArrow" className="arrImg1"/>
        </motion.button>
        <a href={arrOfProjects[current].link} target="_blank" rel='noreferrer' className='images_container justify-evenly p-5 flex bg-opacity-50 bg-cream'>
          <img src={arrOfProjects[current].project} alt={arrOfProjects[current].alt} className="rounded-md " />
        </a>
        <motion.button whileHover={{scale: 1.1}} onClick={ nextProj } className="arrowR bg-opacity-50 bg-cream">
          <img src={ rightArrow } alt="rightArrow" className="arrImg2 rounded-md"/>
        </motion.button>
      </div>
      <h1 className='proj_title text-cream bg-deep-purple'>{arrOfProjects[current].alt}</h1>
    </>
  )
}

export default Carousel