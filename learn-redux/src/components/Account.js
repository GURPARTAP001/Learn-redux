import React, { useState } from 'react'
import './Account.css'

function Account() {
  const [account,setAccount]=useState({amount:0})
  const [value,setValue]=useState(0)
  

  function increment(){
    setAccount({amount:account.amount+1})
  }
  function decrement(){
    setAccount({amount:account.amount-1})
  }
  function incermentByAmount(value){
    
    setAccount({amount:account.amount+value})
  }
  return (
    <div className='account'>
      <h2>Account Component</h2>
      <h3>Amount:${account.amount}</h3>

      <div className="btns">
        <button onClick={increment}>Increment +1</button>
        <button onClick={decrement}>Decrement -1</button>
        <input type="text" onChange={(e)=>{setValue(+e.target.value)}} placeholder='Enter Amount' />
        <button onClick={()=>incermentByAmount(value)}>Increment By {value}</button>
      </div>


    </div>
  )
}

export default Account
