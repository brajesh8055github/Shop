import React from 'react'
import '../styles/card.css'

const Card = ({item, handleClick}) => {

    const {title,author,price,img} = item;
  return (
    <div className='cards'>
      <div className='image_box'>
        <img className='img-c' src={img} alt='' />
      </div>
      <div className='details'>
        <p>{title}</p>
        <p>{author}</p>
        <p> Price - Rs. {price}</p>
        <button onClick={()=> handleClick(item)}>Add to Cart</button>
      </div>
    </div>
  )
}

export default Card