import React from 'react';
import './App.css';
import Account from './components/Account';
import Bonus from './components/Bonus';
import { useSelector } from 'react-redux';

function App() {

  const amount=useSelector((state)=>state.account.amount)
  const points=useSelector((state)=>state.bonus.points)
  return (
    <div className="app">
      <div className="heading">
        <h1>App</h1>
        <h2>Current Amount:{amount}</h2>
        <h2>Total Bonus:{points}</h2>
      </div>
      <Account />
      <Bonus />
    </div>
  );
}

export default App;
