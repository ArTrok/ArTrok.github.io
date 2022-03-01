import React, { useEffect, useState } from 'react';
import leftArrow from '../images/leftArrow.svg';
import rightArrow from '../images/rightArrow.svg';
import project1 from '../images/recipesApp.gif';
import project2 from '../images/recipesApp2.gif';
import project3 from '../images/recipesApp3.gif';

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
    <div className='flex'>
      <button onClick={ previousProj }>
        <img src={ leftArrow } alt="leftArrow" />
      </button>
      <a href={arrOfProjects[current].link} className='images_container'>
        <img src={arrOfProjects[current].project} alt={arrOfProjects[current].alt} />
      </a>
      <button onClick={ nextProj } >
        <img src={ rightArrow } alt="rightArrow" />
      </button>
    </div>
  )
}

export default Carousel