import React, { useEffect } from 'react'
import '../styles/Dropdown.css'
const Dropdown = ({categories, callback, evento}) => {

  useEffect(callback, [])

  function getCategory(e){
    evento(e.target.value)
  }

  return (
    <div className='Dropdown'>
      <select name="category" id="category" onChange={(e) => getCategory(e)}>
        <option value="" defaultValue hidden>Categorie</option>
        {categories.map((categories) => 
        <option value={categories.value} key={categories.id}>{categories.value}</option>
        )}
      </select>
    </div>
  )
}

export default Dropdown