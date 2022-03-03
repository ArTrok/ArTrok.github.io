import React from 'react';
import MadeByMeSeal from '../components/MadeByMeSeal';
import NavBar from '../components/NavBar';
import FunPic from '../images/meDoingPullUps.gif';
import OldPic from '../images/before.png';
import RecentPic from '../images/nowCropped.jpg';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-planets">
    <div className="bg-deep-purple bg-opacity-50">

    <NavBar />
    <div className='main_content_container w-11/12 text-dark-blue m-24 p-10'>
      <div className='flex my-5 p-5'>
        <motion.p whileInView={{scale: 1.2}} transition={{duration: 1}} id='description' data-testid="brief_description1" className='bg-light-blue self-center p-5 mr-56 rounded-md'>
          Born in <em>Sao Paulo City, Brazil,</em> Arthur is a person with a lot of determination
          and is trying to be the change in the world doing what he can with his knowledge
          and physical capabilities. Always updating himself with information from cutting
          edge news hubs most of them focused in tech news. Discovered his abilities as a
          <strong>developer</strong> after graduting in chemical engineering and not finding a job that would
          make him feel fulfilled.
        </motion.p>
        <motion.img whileHover={{scale: 1.1, rotate: 4}} whileTap={{scale: 0.9, rotate: -4}} animate={{opacity: 1}} initial={{opacity: 0.1}} src={ FunPic } alt='Me doing pull ups' className=' rounded-md h-picsize' data-testid="first_pic" />
      </div>
      <div className='flex my-5 p-5'>
        <motion.img whileHover={{scale: 1.1, rotate: -4}} whileTap={{scale: 0.9, rotate: 4}} animate={{opacity: 1}} initial={{opacity: 0.5}} src={ OldPic } alt='before and after of myself' className=' h-picsize rounded-md' data-testid="second_pic" />
        <motion.p whileInView={{scale: 1.2}} transition={{duration: 1}} id='description' className='bg-light-blue self-center p-5 ml-56 rounded-md' data-testid="brief_description2" >
          Born in <em>Sao Paulo City, Brazil,</em> Arthur is a person with a lot of determination
          and is trying to be the change in the world doing what he can with his knowledge
          and physical capabilities. Always updating himself with information from cutting
          edge news hubs most of them focused in tech news. Discovered his abilities as a
          <strong>developer</strong> after graduting in chemical engineering and not finding a job that would
          make him feel fulfilled.
        </motion.p>
      </div>
      <div className='flex my-5 p-5'>
        <motion.p whileInView={{scale: 1.1}} transition={{duration: 1}} id='description' data-testid="brief_description3" className='bg-light-blue self-center p-5 mr-20 rounded-md'>
          Born in <em>Sao Paulo City, Brazil,</em> Arthur is a person with a lot of determination
          and is trying to be the change in the world doing what he can with his knowledge
          and physical capabilities. Always updating himself with information from cutting
          edge news hubs most of them focused in tech news. Discovered his abilities as a
          <strong>developer</strong> after graduting in chemical engineering and not finding a job that would
          make him feel fulfilled.
        </motion.p>
        <motion.img whileHover={{scale: 1.1, rotate: 4}} whileTap={{scale: 0.9, rotate: -4}} animate={{opacity: 1}} initial={{opacity: 0.5}} src={ RecentPic } alt='me smiling in front of a computer' className=' h-picsize2 rounded-md' data-testid="third_pic" />
      </div>
    </div>
    <MadeByMeSeal />
    </div>
    </div>
  );
};

export default About;
