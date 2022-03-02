import React from 'react';
import meLirik from '../images/meLirik.png';
import './MadeByMeSeal.css';

const MadeByMeSeal = () => {
  return (
    <div className='flex bottom-0 mt-32 bg-dark-blue bg-opacity-50 myself rounded-xl' data-testid="made_by" >
      <p className="text-beige-green self-center">Made By</p>
      <img src={ meLirik } className="ml-2" alt="Boy pointing to himself" aria-label='madeByMeSeal' />
  </div>
  )
}

export default MadeByMeSeal