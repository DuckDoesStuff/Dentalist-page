import React from 'react'
import './Body.css'
import Banner from './Banner'
import MainText from './MainText'
import ServiceCard from './ServiceCard'

const Body = () => {
  return (
    <div className='Body'>
        <Banner />
        <MainText />
        <ServiceCard />
    </div>
  )
}

export default Body
