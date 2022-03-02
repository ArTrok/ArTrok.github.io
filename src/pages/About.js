import React from 'react';
import MadeByMeSeal from '../components/MadeByMeSeal';
import NavBar from '../components/NavBar';
import FunPic from '../images/meDoingPullUps.gif';
import OldPic from '../images/before.png';
import RecentPic from '../images/nowCropped.jpg';

const About = () => {
  return (
    <div className="bg-planets">
    <div className="bg-deep-purple bg-opacity-75">

    <NavBar />
    <div className='main_content_container text-dark-blue bg-light-blue'>
      <div>
        <p id='description' data-testid="brief_description1" className=''>
          Born in <em>Sao Paulo City, Brazil,</em> Arthur is a person with a lot of determination
          and is trying to be the change in the world doing what he can with his knowledge
          and physical capabilities. Always updating himself with information from cutting
          edge news hubs most of them focused in tech news. Discovered his abilities as a
          <strong>developer</strong> after graduting in chemical engineering and not finding a job that would
          make him feel fulfilled.
        </p>
        <img src={ FunPic } alt='Me doing pull ups' data-testid="first_pic" />
      </div>
      <div>
        <img src={ OldPic } alt='before and after of myself' data-testid="second_pic" />
        <p id='description' data-testid="brief_description2" >
          Born in <em>Sao Paulo City, Brazil,</em> Arthur is a person with a lot of determination
          and is trying to be the change in the world doing what he can with his knowledge
          and physical capabilities. Always updating himself with information from cutting
          edge news hubs most of them focused in tech news. Discovered his abilities as a
          <strong>developer</strong> after graduting in chemical engineering and not finding a job that would
          make him feel fulfilled.
        </p>
      </div>
      <div>
        <p id='description' data-testid="brief_description3" >
          Born in <em>Sao Paulo City, Brazil,</em> Arthur is a person with a lot of determination
          and is trying to be the change in the world doing what he can with his knowledge
          and physical capabilities. Always updating himself with information from cutting
          edge news hubs most of them focused in tech news. Discovered his abilities as a
          <strong>developer</strong> after graduting in chemical engineering and not finding a job that would
          make him feel fulfilled.
        </p>
        <img src={ RecentPic } alt='me smiling in front of a computer ' data-testid="third_pic" />
      </div>
    </div>
    <MadeByMeSeal />
    </div>
    </div>
  );
};

export default About;
