import React, { useEffect, useState } from 'react';
import './App.css';
import { Products } from './products/Products';
import { useDispatch, useSelector } from 'react-redux';
import { Cart } from './cart/Cart';
import { fetchAsync } from './cart/cartSlice';

function App() {

  const [show,setShow]=useState(false);
  const dispatch = useDispatch();
  const items=useSelector((state)=>state.cart.items);

  useEffect(() => {
    dispatch(fetchAsync())
  },[])
 
  
  return (
    <div className="App">
      <button onClick={()=>{setShow(!show)}}>Cart:[{items.length}]</button>

      {show?<Cart/>:<Products/>}
      
      
    </div>
  );
}

export default App;
