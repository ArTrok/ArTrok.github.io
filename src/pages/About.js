import React from 'react';
import MadeByMeSeal from '../components/MadeByMeSeal';
import NavBar from '../components/NavBar';
import FunPic from '../images/meDoingPullUps.gif';
import OldPic from '../images/beforeAndAfter.jpg';
import RecentPic from '../images/nowCropped.jpg';

const About = () => {
  return (
    <>
    <NavBar />
    <div className='main_content_container'>
      <div>
        <p id='description'>
          Born in <em>Sao Paulo City, Brazil,</em> Arthur is a person with a lot of determination
          and is trying to be the change in the world doing what he can with his knowledge
          and physical capabilities. Always updating himself with information from cutting
          edge news hubs most of them focused in tech news. Discovered his abilities as a
          <strong>developer</strong> after graduting in chemical engineering and not finding a job that would
          make him feel fulfilled.
        </p>
        <img src={ FunPic } alt='Me doing pull ups' />
      </div>
      <div>
        <img src={ OldPic } alt='before and after of myself' />
        <p id='description'>
          Born in <em>Sao Paulo City, Brazil,</em> Arthur is a person with a lot of determination
          and is trying to be the change in the world doing what he can with his knowledge
          and physical capabilities. Always updating himself with information from cutting
          edge news hubs most of them focused in tech news. Discovered his abilities as a
          <strong>developer</strong> after graduting in chemical engineering and not finding a job that would
          make him feel fulfilled.
        </p>
      </div>
      <div>
        <p id='description'>
          Born in <em>Sao Paulo City, Brazil,</em> Arthur is a person with a lot of determination
          and is trying to be the change in the world doing what he can with his knowledge
          and physical capabilities. Always updating himself with information from cutting
          edge news hubs most of them focused in tech news. Discovered his abilities as a
          <strong>developer</strong> after graduting in chemical engineering and not finding a job that would
          make him feel fulfilled.
        </p>
        <img src={ RecentPic } alt='me smiling in front of a computer ' />
      </div>
    </div>
    <MadeByMeSeal />
    </>
  );
};

export default About;
