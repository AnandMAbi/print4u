import './upload.css';
import React from 'react';
import {Link} from 'react-router-dom';

function Uform () {
  return (
    <div>
        <nav>
            <div className="logo"><h3>print4u</h3></div>
        </nav>

        <Link to='/print'>
          <button className='secondary-btn'> Print </button>
        </Link>
        <Link to='/upload'>
          <button className='secondary-btn'>Upload</button>
        </Link>
        <p className='text'>When uploading a file, the user will get 5% of the profit for each print ordered</p>
        <button className='primary-btn'>Next</button>
    </div>
  );
}

export default Uform;