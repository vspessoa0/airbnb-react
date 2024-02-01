import React from 'react';
import './App.css';
import data from './data';

import { Navbar, Hero, Card } from './components'

const App = () => {

  const cards = data.map(item => {
    const imgPath = process.env.PUBLIC_URL + '/images/' + item.coverImg;
    return (
      <Card
        key={item.id}
        img={imgPath}
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