import React, { useEffect, useState } from 'react';
import '../styles/cart.css'

const Cart = ({cart,setCart,handleChange}) => {

    const [price,setPrice] = useState(0);

    const handleRemove = (id) =>{
      const arr = cart.filter((item) => item.id !== id);
      setCart(arr);
    }

    const handlePrice = () => {
      let ans = 0;
      cart.map((item) => {
        ans+= item.amount * item.price;
      })
      setPrice(ans)
    }
    

    useEffect(() => {
      handlePrice();
    })
    
  return (
      <article>
        {
            cart?.map((item) => (
                <div className='cart_box' key={item.id}>
                    <div className='cart_img'>
                        <img src={item.img} alt=''/>
                        <p className='m-2'>{item.title}</p>
                    </div>
                    <div className='display'>
                    <div>
                    <button className='btn btn-success mx-2' onClick={() => {
                      handleChange(item ,+1)
                    }}>+</button>
                    <span>{item.amount}</span>
                    
                    <button className='btn btn-danger mx-2' onClick={() => {
                      handleChange(item ,-1)
                    }}>-</button>
                    </div>
                    <div className='mx-3'>
                      <span>{item.price}/pic</span>
                      <button className='btn btn-danger mx-1' onClick={() => handleRemove(item.id)}>Remove</button>
                    </div>
                    </div>
                </div>
            ))
        }
        <div className='total'>
          <span><h6>Total Price of your Cart</h6></span>
          <span> <h6>Rs. {price}</h6></span>
        </div>

        {/* <button className='btn btn-warning'>Order Now</button> */}
      </article>
  )
}

export default Cart