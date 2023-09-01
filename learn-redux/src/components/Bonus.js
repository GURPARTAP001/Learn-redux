import React from 'react'
import './Bonus.css'
import { useDispatch, useSelector } from 'react-redux'
import { bonus_increment } from '../actions'

function Bonus() {

  const points=useSelector(state=>state.bonus.points)
  const dispatch=useDispatch()

    
  return (
    <div className='bonus'>
        <h2>Bonus Component</h2>
        <h3>Total Points :{points}</h3>

        <button onClick={()=>dispatch(bonus_increment())}>Increment +1</button>
      
    </div>
  )
}

export default Bonus
