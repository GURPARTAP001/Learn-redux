import React, {  useState } from 'react'
import './Bonus.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../slices/bonusSlice';

function Bonus() {
    const points=useSelector(state=>state.bonus.points);
    const dispatch=useDispatch()
  return (
    <div className='bonus'>
      <h2>Bonus Component</h2>
        <h3>Total Points :{points}</h3>

        <button onClick={()=>dispatch(increment())}>Increment +1</button>
    </div>
  )
}

export default Bonus
