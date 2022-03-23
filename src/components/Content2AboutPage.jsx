import React from 'react';
import OldPic from '../images/before.png';
import { motion } from 'framer-motion';

const Content2AboutPage = ({language}) => {
  return (
    <>
      <motion.img whileHover={{scale: 1.1, rotate: -4}} whileTap={{scale: 0.9, rotate: 4}} animate={{opacity: 1}} initial={{opacity: 0.5}} src={ OldPic } alt='before and after of myself' className='elC rounded-md' data-testid="second_pic" />
      {language === 'portuguese' ? (
        <motion.p whileInView={{scale: 1.05}} transition={{duration: 1}} id='description' className='elD bg-deep-purple self-center p-2 rounded-md' data-testid="brief_description2" >
        Esta foto sou eu no ano de 2019 com 22 anos, naquele momento eu não praticava 
        nenhum esporte com frequência e não tinha um objetivo sólido em relação a tecnologia, 
        mas também neste ponto da minha vivência, percebi que deveria buscar <b>me desenvolver</b> no que 
        realmente gosto de fazer. Então resolvi começar a praticar musculação que me impulsionou a melhorar 
        em outras áreas da vida pessoal e profissional também.
        </motion.p>) : (
        <motion.p whileInView={{scale: 1.05}} transition={{duration: 1}} id='description' className='elD bg-deep-purple self-center p-2 rounded-md' data-testid="brief_description2" >
        This photo is me in the year 2019 at the age of 22, at that time I did not practice
        sports often and didn't have a solid goal in terms of technology,
        but also at this point in my experience, I realized that I should seek to <b>develop myself</b> in what
        I really like to do. So I decided to start practicing bodybuilding which boosted me to improve
        in other areas of personal and professional life as well.
        </motion.p>
      )
      }
    </>
  )
}

export default Content2AboutPage