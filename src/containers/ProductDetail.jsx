import React from 'react'
import ProductInfo from '../components/ProductInfo'
import '../styles/containers/ProductDetail.scss'

const ProductDetail = () => {
  return (
    <aside className="productDetail">
      <div className="productDetailClose">
        <img src="./assets/icons/close.svg" alt="close" />
      </div>
      <ProductInfo />
    </aside>
  )
}

export default ProductDetail