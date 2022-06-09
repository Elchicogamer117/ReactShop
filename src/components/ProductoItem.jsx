import React from 'react'
import '../styles/components/ProductoItem.scss'

const ProductoItem = () => {
  return (
    <div className="productItem">
      <img src="https://images.pexels.com/photos/776092/pexels-photo-776092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt />
      <div className="productInfo">
        <div>
          <p> $120 </p>
          <p> Nintendo control </p>
        </div>
        <figure>
          <img src="../../public/assets/icons/btnAddToCart" alt="addToCart" />
        </figure>
      </div>
    </div>
  )
}

export default ProductoItem