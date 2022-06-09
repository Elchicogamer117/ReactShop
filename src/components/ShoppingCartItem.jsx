import React from 'react'
import '../styles/components/ShoppingCartItem.scss'

const ShoppingCartItem = () => {
  return (
    <div className="shoopingCardItem">        
      <figure>
        <img src="https://images.pexels.com/photos/776092/pexels-photo-776092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt />                
      </figure>
      <p> Camera </p>
      <p> $120 </p>
      <img src="./assets/icons/icon_close.png" alt="close" />
    </div>
  )
}

export default ShoppingCartItem