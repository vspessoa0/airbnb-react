import React from 'react';
import './App.css';
import image1 from './images/image1.png';
import data from './data';

import { Navbar, Hero, Card } from './components'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card
        img={image1}
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life lessons with Katie Zaferes"
        price={136}
      />
    </div>
  )
}

export default App