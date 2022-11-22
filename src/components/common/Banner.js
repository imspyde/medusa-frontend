import React from 'react'
import './banner.css';
const Banner= (props) => {
  return (
    <div className='banner'>
       <img src = {props.src} className='banner-image' alt = 'failed to load'/>
    </div>
)
}

export default Banner;