import React from 'react';
import { motion } from 'framer-motion';
import FunPic from '../images/meDoingPullUps.gif';

const Content1MainPage = ({language}) => {
  return (
    <>
    {language === 'portuguese' ? (
      <motion.p whileInView={{scale: 1.05}} transition={{duration: 1}} id='description' data-testid="brief_description1" className='elA bg-deep-purple self-center p-2 rounded-md'>
      Meu nome é Arthur Teixeira e sou de São Paulo, sempre gostei de novidades, praticar esportes e jogos de todos os tipos.
        Me graduei em engenharia química pela Universidade Santo Amaro, onde adquiri muito conhecimento, mas não para fazer bombas.
        Apesar de minha formação, a paixão pela tecnologia falou mais alto, e hoje busco evoluir na área da <b>programação</b>. Tenho gostado
        bastante de aprender sobre JavaScript e muitas de suas frameworks e bibliotecas, mas também me interesso por Java e Python mesmo
        não sendo um especialista em nenhuma dessas linguagens por ter pouco tempo de estrada. Meu foco atualmente é totalmente voltado para
        este sonho que tenho desde que descobri o quão desafiadora e cheia de conhecimentos pode ser esta jornada.
      </motion.p>
    ) : (
      <motion.p whileInView={{scale: 1.05}} transition={{duration: 1}} id='description' data-testid="brief_description1" className='elA bg-deep-purple self-center p-2 rounded-md'>
      My name is Arthur Teixeira and I'm from São Paulo, I've always liked the news, sports, and games of all kinds.
        I graduated in chemical engineering from Universidade Santo Amaro, where I acquired a lot of knowledge, but not to make bombs.
        Despite my training, the passion for technology spoke louder, and today I seek to evolve in the area of ​​<b>programming</b>. I have been
        enjoying to learn about JavaScript and many of its frameworks and libraries, but I'm also interested in Java and Python even though
         I am not an expert in any of these languages ​​because I have little time on the road. My focus is currently totally on this dream that I
         have since I discovered how challenging and full of knowledge this journey can be.
      </motion.p>
    )
  }
  <motion.img whileHover={{scale: 1.1, rotate: 4}} whileTap={{scale: 0.9, rotate: -4}} animate={{opacity: 1}} initial={{opacity: 0.1}} src={ FunPic } alt='Me doing pull ups' className='elB rounded-md' data-testid="first_pic" />
  </>
    )
}

export default Content1MainPage