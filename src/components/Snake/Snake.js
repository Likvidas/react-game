import React from 'react';
import './Snake.css';

const Snake = ({ bodyCoordinate }) => {  
  const body = bodyCoordinate.map((el, i) => {
    return (
      <div key={i}
        className='snake-body'
        style={{left: `${el[0]}%`, top: `${el[1]}%`}}></div>
    )
  })

  return (
    <>
      {body}
    </>  
  )
}

export default Snake;