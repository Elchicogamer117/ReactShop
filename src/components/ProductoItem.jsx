import React, { useState } from 'react'
import btCart from '@icons/btAddToCart.svg'
import '@styles/components/ProductoItem.scss'

const ProductoItem = () => {
  const [cart, setCart] = useState('Hello world 🖖')

  const handleClick = () => {
    setCart('Goodbye world 🖖')
  }
  return (
    <div className="productItem">
      <img src="https://images.pexels.com/photos/776092/pexels-photo-776092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt />
      <div className="productInfo">
        <div>
          <p> $120 </p>
          <p> Nintendo control </p>
        </div>
        <figure onClick={handleClick}>
          <img src={btCart} alt="addToCart" />
        </figure>
        {cart}
      </div>
    </div>
  )
}

export default ProductoItem