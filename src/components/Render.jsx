import React from 'react'
import '../styles/Render.css'

const Render = ({joke}) => {
  return (
    <div className='Render'>
      <p id='joke'>{joke}</p>
    </div>
  )
}

export default Render
