import React from 'react'
import './MainText.css'
import line from '../images/paragraph_line.svg'

const MainText = () => {
  return (
    <div className='MainText'>
        <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam quos quaerat, tenetur quidem deserunt debitis, aspernatur nisi sit recusandae provident nemo amet possimus nesciunt officia!</h2>
        <img src={line} alt="" />
    </div>
  )
}

export default MainText
