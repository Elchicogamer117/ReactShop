import React from 'react'
import '../styles/components/ProductInfo.scss'

const ProductInfo = () => {
  return (
    <div className="productInfo">
      <p> $120 </p>
      <p> Bagpack </p>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      <button className="primaryButton AddToCartButton">
        <img src="./assets/icons/btAddToCart.svg" alt="addToCart" /> Add to cart
      </button>
    </div>

  )
}

export default ProductInfo