import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <ul>
        <li><Link to="/Dogs">Dogs</Link></li>
        <li><Link to="/Cats">Cats</Link></li>
        <li><Link to="/Rabbits">Rabbits</Link></li>
      </ul>

    </div>
  );
}

export default Home;
