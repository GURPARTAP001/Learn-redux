import React, { useState } from 'react'
import './Bonus.css'

function Bonus() {
    const [bonus,setBonus]=useState({points:0})

    const increment=()=>{
        setBonus({points:bonus.points+1})
    }
  return (
    <div className='bonus'>
        <h2>Bonus Component</h2>
        <h3>Total Points :{bonus.points}</h3>

        <button onClick={increment}>Increment +1</button>
      
    </div>
  )
}

export default Bonus
