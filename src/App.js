import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Landing'
import Landing from './components/Landing';
import Utilities from './components/Utilities';
import Merchants from './components/Merchants';
import Transactions from './components/Transactions';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="container">
      <div class="section"><Landing /></div>
      <div class="section"> <Utilities /> </div>
      <div class="section"> <Merchants /> </div>
      <div class="section"> <Transactions /> </div>
      <div class="section"> <Navigation /> </div>
    </div>
  );
}

export default App;
