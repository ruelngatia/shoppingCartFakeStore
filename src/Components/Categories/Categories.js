// import React from 'react'
import './Categories.css'

export default function Categories(props) {
  return (
    <div className='categories'>
      <ul>
        <li onClick={()=>{props.changeCategory('electronics')}}>Electronics</li>
        <li  onClick={()=>{props.changeCategory('jewelery')}}>Jewelery</li>
        <li  onClick={()=>{props.changeCategory(`men's clothing`)}}>Men's clothing</li>
        <li  onClick={()=>{props.changeCategory(`women's clothing`)}}>Women's clothing</li>
      </ul>
    </div>
  )
}
