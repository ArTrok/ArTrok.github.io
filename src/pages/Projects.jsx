import React from 'react'
import Carousel from '../components/Carousel'
import MadeByMeSeal from '../components/MadeByMeSeal'
import NavBar from '../components/NavBar'

const Projects = () => {
  return (
    <div className="bg-planets">
    <div className="bg-deep-purple bg-opacity-50">
      <NavBar />
      <div className='main_content_container'>
      <Carousel />
      </div>
      <MadeByMeSeal />
    </div>
    </div>
  )
}

export default Projects
