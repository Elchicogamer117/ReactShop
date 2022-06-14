import React, { useState } from 'react'
import btCart from '@icons/btAddToCart.svg'
import '@styles/components/ProductoItem.scss'

const ProductItem = ({product}) => {
  const [cart, setCart] = useState([])

  const handleClick = () => {
    setCart([])
  }
  return (
    <div className="productItem">
      <img src={product.images[0]} alt={product.category.name} />
      <div className="productInfo">
        <div>
          <p> ${product.price} </p>
          <p> {product.title} </p>
        </div>
        <figure onClick={handleClick}>
          <img src={btCart} alt="addToCart" />
        </figure>
      </div>
    </div>
  )
}

export default ProductItem