import React from 'react';
import './App.css';
import data from './data';

import { Navbar, Hero, Card } from './components'

const App = () => {

  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.reviewCount}
        title={item.title}
        price={item.price}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {cards}
      </section>
    </div>
  )
}

export default App