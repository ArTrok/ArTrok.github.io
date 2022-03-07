import React from 'react';
import MadeByMeSeal from '../components/MadeByMeSeal';
import NavBar from '../components/NavBar';
import FunPic from '../images/meDoingPullUps.gif';
import OldPic from '../images/before.png';
import RecentPic from '../images/nowCropped.jpg';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <div className="bg-planets">
    <div className="bg-deep-purple bg-opacity-50">

    <NavBar />
    <div className='main_content_container2 w-11/12 text-dark-blue p-1'>
      <motion.p whileHover={{scale: 1.1, rotate: 1}} whileTap={{scale: 0.9, rotate: -1}} animate={{opacity: 1}} initial={{opacity: 0.1}} className='About_me bg-light-blue text-center rounded-md'>Sobre Mim</motion.p>
      <div className='content1'>
        <motion.p whileInView={{scale: 1.05}} transition={{duration: 1}} id='description' data-testid="brief_description1" className='elA bg-light-blue self-center p-1 rounded-md'>
        Nascido na cidade de São Paulo, sempre gostei de tecnologia e praticar atividades físicas.
         Apesar disso, nunca me imaginei atuando de forma profissional em nenhuma delas. 
         Me graduei em engenharia química, porém não tinha a paixão necessária para seguir este caminho, 
         adquiri muito conhecimento que hoje é bastante útil para o <b>sonho que estou seguindo na área tech</b>.
        </motion.p>
        <motion.img whileHover={{scale: 1.1, rotate: 4}} whileTap={{scale: 0.9, rotate: -4}} animate={{opacity: 1}} initial={{opacity: 0.1}} src={ FunPic } alt='Me doing pull ups' className='elB rounded-md' data-testid="first_pic" />
      </div>
      <div className='content2'>
        <motion.img whileHover={{scale: 1.1, rotate: -4}} whileTap={{scale: 0.9, rotate: 4}} animate={{opacity: 1}} initial={{opacity: 0.5}} src={ OldPic } alt='before and after of myself' className='elC rounded-md' data-testid="second_pic" />
        <motion.p whileInView={{scale: 1.05}} transition={{duration: 1}} id='description' className='elD bg-light-blue self-center p-1 rounded-md' data-testid="brief_description2" >
        A foto ao lado sou eu no ano de 2019 com 22 anos, naquele momento eu não praticava 
        nenhum esporte com frequência e não tinha um objetivo sólido em relação a tecnologia, 
        mas também neste ponto da minha vivência, percebi que deveria buscar <b>me desenvolver</b> no que 
        realmente gosto de fazer. Então resolvi começar a praticar musculação que me impulsionou a melhorar 
        em outras áreas da vida pessoal e profissional.
        </motion.p>
      </div>
      <div className='content3'>
        <motion.p whileInView={{scale: 1.05}} transition={{duration: 1}} id='description' data-testid="brief_description3" className='elE bg-light-blue self-center p-1 mr-20 rounded-md'>
        Hoje, mesmo que apenas começando na área tech, me sinto muito mais realizado e 
        com um futuro brilhante a frente, de uma forma que nunca havia imaginado antes. 
        Durante essa montanha russa de emoções, aprendi que devo ser <b>grato</b> pelo que já conquistei e 
        sempre buscar por mais a fim de me tornar um ser humano melhor, ficar acomodado não é pra mim.
        </motion.p>
        <motion.img whileHover={{scale: 1.1, rotate: 4}} whileTap={{scale: 0.9, rotate: -4}} animate={{opacity: 1}} initial={{opacity: 0.5}} src={ RecentPic } alt='me smiling in front of a computer' className='elF rounded-md' data-testid="third_pic" />
      </div>
    </div>
    <MadeByMeSeal />
    </div>
    </div>
  );
};

export default About;
