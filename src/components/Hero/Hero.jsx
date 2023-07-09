import React from 'react'
import './Hero.css'
import HeroInfo from '../HeroInfo/HeroInfo'
import Infographics from '../Infographics/Infographics'

const Hero = () => {
  return (
    <section className='hr-wrapper'>
      <div className='paddings innerWidth hr-container'>
        <div className='flexItem hr-row'>
          <div className='hr-col1'>
            <HeroInfo />
          </div>
          <div className='hr-col2'>
            <Infographics />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero