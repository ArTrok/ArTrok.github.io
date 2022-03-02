import React from 'react';
import './SoftSkills.css';

const SoftSkils = ({iconsSoft}) => {
  return (
    <div className="soft_skills_container grid">
    <h2 className='bg-dark-blue text-cream soft_skills_title text-center text-3xl font-bold  w-full rounded-xl'>Soft Skills</h2>
    {iconsSoft.map((icon, index) => {
      return (
        <div key={index} className={`icon_container${index}s text-dark-blue bg-light-blue p-3
        rounded-2xl w-32 h-auto`}>
        <img src={icon.link} alt={icon.text} />
        <p className='skill_name font-bold'>{icon.text}</p>
      </div>)
    })}
    </div>
  )
}

export default SoftSkils