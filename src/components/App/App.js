import React, { useState } from 'react';
import Home from '../Home/Home';
import Currecnies from '../Currencies/Currencies';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [price, setPrice] = useState(null);
  const [username, setUsername] = useState('David')

  const handleClick = price => {
    setPrice(price);
  };

  return (
    <div>
      <nav>
        <img src="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png" alt="" />
        <h1>Bitcoin prices</h1>
      </nav>
      <main>
        <Routes>
          <Route path = "/" element={<Home username={username}/>} />
          <Route path="currencies" element={<Currecnies/>}/>
        </Routes>
        
      </main>
    </div>
  );
}

export default App;
