import React from 'react'
import './Banner.css'
import PurpleBtn from './PurpleBtn'
import info from '../images/emergency24h.svg'

const Banner = () => {
  return (
    <div className='Banner'>
        <div className="container">
            <h1>Entrust your smile to professional</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae error enim eum, eveniet provident magni? Delectus officiis ut in laudantium.</p>
            <div className="contact">
                <PurpleBtn text='Book an appointment' link='#'/>
                <img src={info} alt="Contact info" />
            </div>
        </div>
    </div>
  )
}

export default Banner
