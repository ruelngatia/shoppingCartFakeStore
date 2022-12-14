// import React from 'react'
import './Categories.css'
import { HiMenu } from "react-icons/hi";
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Categories(props) {
  
  
  let [hideUnhide, setHideUnhide] = useState('')

  
  return (
    <div className='categories'>
      <span className='menu'>
        <HiMenu size={24}
        onClick={()=>{
          if(hideUnhide === ''){
            setHideUnhide(hideUnhide = 'hide-unhide')
          }else{
            setHideUnhide(hideUnhide = '')
          }
        }}
      /></span>
      <ul className={hideUnhide}>
        <Link className='link' to={'/'}><li onClick={()=>{props.changeCategory('All')}}>All</li></Link>
        <Link className='link' to={'/electronics'}><li onClick={()=>{props.changeCategory('electronics')}}>Electronics</li></Link>
        <Link className='link' to={'/jewelery'}><li  onClick={()=>{props.changeCategory('jewelery')}}>Jewelery</li></Link>
        <Link className='link' to={'/men clothing'}><li  onClick={()=>{props.changeCategory(`men's clothing`)}}>Men's clothing</li></Link>
        <Link className='link' to={'/womenclothing'}><li  onClick={()=>{props.changeCategory(`women's clothing`)}}>Women's clothing</li></Link>
      </ul>
    </div>
  )
}
