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
        item={item}
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