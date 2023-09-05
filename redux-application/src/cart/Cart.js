import React, { useEffect } from 'react';
import { useDispatch, useSelector,  } from 'react-redux';
import './Cart.css';
import { deleteItemAsync, updateItemAsync } from './cartSlice';

export function Cart() {

  
  const items = useSelector((state) => state.cart.items)
  const dispatch=useDispatch();

  const handleChange=(e,id)=>{
   dispatch( updateItemAsync({id,change:{quantity:+e.target.value}}))
    
  }


  return (
    <div className='main'>
      {items.map(item => (
        <div className='cart'>
          <img src={item.thumbnail} alt={item.title} />
          <div className='textBox'>
          <h3>{item.brand}</h3>
          <h2>{item.title}</h2>
          </div>

          <h2>${item.price}</h2>
          <span>Quantity :</span>
          <select value={item.quantity} onChange={(e)=>handleChange(e,item.id)}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
          <button onClick={()=>dispatch(deleteItemAsync(item.id))} >X</button>
        </div>
      ))}
      <h1>Total:${items.reduce((acc,item)=>item.price*item.quantity+acc,0)}</h1>


    </div>
  );
}
