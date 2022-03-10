import React from 'react';
import RecentPic from '../images/nowCropped.jpg';
import { motion } from 'framer-motion';

const Content3AboutPage = () => {
  return (
    <>
    <motion.p whileInView={{scale: 1.05}} transition={{duration: 1}} id='description' data-testid="brief_description3" className='elE bg-light-blue self-center p-1 mr-20 rounded-md'>
        Hoje estou fazendo um curso de desenvolvimento web pela Trybe e passando por experiências <b>MARAVILHOSAS</b>, tendo
         a oportunidade de basicamente simular um ambiente de trabalho como <b>developer</b>.
         Mesmo que apenas começando na área tech, me sinto muito mais realizado e 
        com um futuro brilhante a frente, de uma forma que nunca havia imaginado antes. 
        Durante essa montanha russa de emoções, aprendi que devo ser grato pelo que já conquistei e 
        sempre buscar por mais a fim de me tornar um ser humano melhor, ficar acomodado não é pra mim.
        </motion.p>
        <motion.img whileHover={{scale: 1.1, rotate: 4}} whileTap={{scale: 0.9, rotate: -4}} animate={{opacity: 1}} initial={{opacity: 0.5}} src={ RecentPic } alt='me smiling in front of a computer' className='elF rounded-md' data-testid="third_pic" />
    </>
  )
}

export default Content3AboutPage