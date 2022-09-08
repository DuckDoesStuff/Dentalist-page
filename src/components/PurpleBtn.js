import React from 'react'
import './PurpleBtn.css'

const PurpleBtn = (props) => {
  return (
    <div>
        <a href={props.link}>
          <button className='Button'>
            {props.text}
          </button>
        </a>
  </div>  
  )
}

export default PurpleBtn
