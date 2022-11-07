// import React from 'react'
import './Categories.css'
import { HiMenu } from "react-icons/hi";
import { useState } from 'react';

export default function Categories(props) {
  
  
  let [hideUnhide, setHideUnhide] = useState('')

  
  return (
    <div className='categories'>
      <span className='menu'>
        <HiMenu size={24}
        onClick={()=>{
          if(hideUnhide == ''){
            setHideUnhide(hideUnhide = 'hide-unhide')
          }else{
            setHideUnhide(hideUnhide = '')
          }
        }}
      /></span>
      <ul className={hideUnhide}>
        <li onClick={()=>{props.changeCategory('electronics')}}>Electronics</li>
        <li  onClick={()=>{props.changeCategory('jewelery')}}>Jewelery</li>
        <li  onClick={()=>{props.changeCategory(`men's clothing`)}}>Men's clothing</li>
        <li  onClick={()=>{props.changeCategory(`women's clothing`)}}>Women's clothing</li>
      </ul>
    </div>
  )
}
