import React from 'react';
import { Link } from 'react-router-dom';

export const Oops = () => (
  <div className="oops">
    <h3>Oops! Something went wrong</h3>
    <p>We could not find the page you are looking for.</p>
    <Link to="/"><button>Home Page</button></Link>
  </div>
);

export default Oops;
