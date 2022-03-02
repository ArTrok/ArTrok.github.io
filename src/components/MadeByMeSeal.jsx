import React from 'react';
import meLirik from '../images/meLirik.png';

const MadeByMeSeal = () => {
  return (
    <div className='flex bottom-0 bg-dark-blue bg-opacity-50' data-testid="made_by" >
      <p className="text-beige-green">Made By</p>
      <img src={ meLirik } alt="Boy pointing to himself" aria-label='madeByMeSeal' />
  </div>
  )
}

export default MadeByMeSeal