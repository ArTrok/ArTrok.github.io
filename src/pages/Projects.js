import React from 'react'
import Carousel from '../components/Carousel'
import MadeByMeSeal from '../components/MadeByMeSeal'
import NavBar from '../components/NavBar'

const Projects = () => {
  return (
    <div className="bg-planets">
      <NavBar />
      <div className='main_content_container'>
      <Carousel />
      </div>
      <MadeByMeSeal />
    </div>
  )
}

export default Projects
