import React from 'react';
import NavBar from './nav';
import Card from './card';

function Home () {
  return (
    <div>
        <NavBar title='print4u' />
        <button className='upload'>+</button>
        <Card />
        
    </div>
  );
}

export default Home;