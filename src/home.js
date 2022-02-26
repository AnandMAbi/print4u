import React from 'react';
import Card from './card';

function Home () {
  return (
    <div>
        <nav>
            <div className="logo"><h3>print4u</h3></div>
        </nav>
        <button className='upload'>+</button>
        <Card />
        
    </div>
  );
}

export default Home;