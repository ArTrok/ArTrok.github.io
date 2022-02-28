import React from 'react';
import meLirik from '../images/meLirik.png';

const MadeByMeSeal = () => {
  return (
    <div className='flex' data-testid="made_by" >
      <p>Made By</p>
      <img src={ meLirik } alt="Boy pointing to himself" aria-label='madeByMeSeal' />
  </div>
  )
}

export default MadeByMeSeal