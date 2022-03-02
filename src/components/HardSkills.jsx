import React from 'react';
import './HardSkills.css';

const HardSkills = ({icons}) => {
  return (
    <div className='hard_skills_container grid'>
        <h2 className='bg-dark-blue text-cream hard_skills_title font-bold text-3xl text-center rounded-xl w-full'>Hard Skills</h2>
    {icons.map((icon, index) => {
      return (
        <div key={index} className={`icon_container${index}h text-dark-blue bg-light-blue p-3
         rounded-2xl w-32 h-auto`}>
        <img src={icon.link} alt={icon.alt} />
        <p className='skill_name font-bold'>{icon.name}</p>
      </div>)
    })}
    </div>
  )
}

export default HardSkills