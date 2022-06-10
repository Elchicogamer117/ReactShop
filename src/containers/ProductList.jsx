import React from 'react'
import ProductoItem from '@components/ProductoItem'
import '@styles/containers/ProductList.scss'

const ProductList = () => {
  return (
    <section>
      <div className="productList">
        <ProductoItem />
      </div>
    </section>

  )
}

export default ProductList