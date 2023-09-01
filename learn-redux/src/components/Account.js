import React, { useState } from 'react'
import './Account.css'
import { useDispatch, useSelector } from 'react-redux'
import { account_increment,account_decrement,account_incrementByAmount, account_init } from '../actions'

function Account() {
 
  const [value,setValue]=useState(0);

  const amount=useSelector(state=>state.account.amount)
  const account=useSelector(state=>state.account)
  const dispatch=useDispatch()
  
  return (
    <div className='account'>
      <h2>Account Component</h2>
      {account.pending?<p>Loading...</p> : account.error?<p>{account.error}</p>:<h3>Amount:${amount}</h3>}
      

      <div className="btns">
        <button onClick={()=>dispatch(account_increment())}>Increment +1</button>
        <button onClick={()=>dispatch(account_decrement())}>Decrement -1</button>
        <input type="text" onChange={(e)=>{setValue(+e.target.value)}} placeholder='Enter Amount' />
        <button onClick={()=>dispatch(account_incrementByAmount(value))}>Increment By {value}</button>
        <button onClick={()=>dispatch(account_init(1))}>Get Account Info</button>
      </div>


    </div>
  )
}

export default Account
