import React from 'react'
import '../styles/Buttons.css'
const Buttons = ({text, variant, callback, styles}) => {

  function renderClasses(){
    let classes = [
      'buttons', variant, styles
    ]

    return classes.join(" ")
  }

  return (
    <div>
      <button className={renderClasses()} onClick={callback}>{text}</button>
    </div>
  )
}

export default Buttons