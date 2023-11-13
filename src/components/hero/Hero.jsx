import React from 'react'
import grid from '../../images/grid.png'
import './hero.css'

const Hero = () => {
  return (
   <section className='hero'>
    <img src={grid} alt="Photo Grid" className='hero--photo' />
    <h1 className='hero--header'>Online Experiencies</h1>
    <p className='hero--text'>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
   </section>
  )
}

export default Hero