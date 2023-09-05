import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchAsync} from './productsSlice'
import  './Products.css';
import { addItemAsync } from '../cart/cartSlice';

export function Products() {
  
  const dispatch = useDispatch();
  const products=useSelector((state)=>state.product.products)

  useEffect(()=>{
      dispatch(fetchAsync())
  },[])


  return (
    <div className='mainp'>
      { products.map(product=>(
        <div className="card" key={product.id}>
        <img src={product.thumbnail} alt={product.title} style={{"width":"100%"}} />
          <h1>{product.title}</h1>
          <p className="price">${product.price}</p>
          <p>{product.description.length>=50?product.description.slice(0,50):product.description}...</p>
          <p><button onClick={()=>dispatch(addItemAsync(product))}>Add to Cart</button></p>
      </div>

      ))}

      
    </div>
  );
}
