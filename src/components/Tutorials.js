import React from 'react';
import { Link } from 'react-router-dom';

function Tutorial() {
  return (
    <div className='container'>
      <h2>Tutorials</h2>
      <ul>
        <li><Link to="/documentation">Documentation</Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
      </ul>
    </div>
  )
}

export default Tutorial;