import React from 'react';
import RecentPic from '../images/nowCropped.jpg';
import { motion } from 'framer-motion';

const Content3AboutPage = ({language}) => {
  return (
    <>
    {language === 'portuguese' ? (
    <motion.p whileInView={{scale: 1.05}} transition={{duration: 1}} id='description' data-testid="brief_description3" className='elE bg-deep-purple self-center p-2 mr-20 rounded-md'>
        Hoje estou fazendo um curso de desenvolvimento web pela Trybe e passando por experiências <b>MARAVILHOSAS</b>, tendo
         a oportunidade de basicamente simular um ambiente de trabalho como <b>developer</b>.
         Mesmo que apenas começando na área tech, me sinto muito mais realizado e 
        com um futuro brilhante a frente, de uma forma que nunca havia imaginado antes. 
        Durante essa montanha russa de emoções, aprendi que devo ser grato pelo que já conquistei e 
        sempre buscar por mais a fim de me tornar um ser humano melhor, ficar acomodado não é pra mim.
        </motion.p>) : (
    <motion.p whileInView={{scale: 1.05}} transition={{duration: 1}} id='description' data-testid="brief_description3" className='elE bg-deep-purple self-center p-2 mr-20 rounded-md'>
        Today I'm taking a web development course at Trybe and going through <b>WONDERFUL</b> experiences, having
         the opportunity to basically simulate a working environment as a <b>DEVELOPER</b>.
         Even if I'm just starting in the tech area, I feel much more accomplished and
        with a brighter future ahead, in a way I never imagined before.
        During this roller coaster of emotions, I learned that I should be grateful for what I've already achieved and
        always look for more in order to become a better human being, staying in the confort zone is not for me.
        </motion.p>)

    }
        <motion.img whileHover={{scale: 1.1, rotate: 4}} whileTap={{scale: 0.9, rotate: -4}} animate={{opacity: 1}} initial={{opacity: 0.5}} src={ RecentPic } alt='me smiling in front of a computer' className='elF rounded-md' data-testid="third_pic" />
    </>
  )
}

export default Content3AboutPage