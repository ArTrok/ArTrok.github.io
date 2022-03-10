import React from 'react';
import MadeByMeSeal from '../components/MadeByMeSeal';
import NavBar from '../components/NavBar';
import OldPic from '../images/before.png';
import RecentPic from '../images/nowCropped.jpg';
import { motion } from 'framer-motion';
import './About.css';
import Content1MainPage from '../components/Content1AboutPage';

const About = () => {
  return (
    <div className="bg-planets">
    <div className="bg-deep-purple bg-opacity-50">

    <NavBar />
    <div className='main_content_container2 w-11/12 text-dark-blue p-1'>
      <motion.p whileHover={{scale: 1.1, rotate: 1}} whileTap={{scale: 0.9, rotate: -1}} animate={{opacity: 1}} initial={{opacity: 0.1}} className='About_me bg-light-blue text-center rounded-md'>Sobre Mim</motion.p>
      <div className='content1'>
        <Content1MainPage />
      </div>
      <div className='content2'>
        <motion.img whileHover={{scale: 1.1, rotate: -4}} whileTap={{scale: 0.9, rotate: 4}} animate={{opacity: 1}} initial={{opacity: 0.5}} src={ OldPic } alt='before and after of myself' className='elC rounded-md' data-testid="second_pic" />
        <motion.p whileInView={{scale: 1.05}} transition={{duration: 1}} id='description' className='elD bg-light-blue self-center p-1 rounded-md' data-testid="brief_description2" >
        A foto ao lado sou eu no ano de 2019 com 22 anos, naquele momento eu não praticava 
        nenhum esporte com frequência e não tinha um objetivo sólido em relação a tecnologia, 
        mas também neste ponto da minha vivência, percebi que deveria buscar <b>me desenvolver</b> no que 
        realmente gosto de fazer. Então resolvi começar a praticar musculação que me impulsionou a melhorar 
        em outras áreas da vida pessoal e profissional também.
        </motion.p>
      </div>
      <div className='content3'>
        <motion.p whileInView={{scale: 1.05}} transition={{duration: 1}} id='description' data-testid="brief_description3" className='elE bg-light-blue self-center p-1 mr-20 rounded-md'>
        Hoje estou fazendo um curso de desenvolvimento web pela Trybe e passando por experiências <b>MARAVILHOSAS</b>, tendo
         a oportunidade de basicamente simular um ambiente de trabalho como <b>developer</b>.
         Mesmo que apenas começando na área tech, me sinto muito mais realizado e 
        com um futuro brilhante a frente, de uma forma que nunca havia imaginado antes. 
        Durante essa montanha russa de emoções, aprendi que devo ser grato pelo que já conquistei e 
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
