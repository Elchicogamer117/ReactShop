import React from 'react'
import ProductoItem from '@components/ProductoItem'
import useGetProducts from '../hooks/useGetProducts'
import '@styles/containers/ProductList.scss'

const API = 'https://api.escuelajs.co/api/v1/products'

const ProductList = () => {
  const products = useGetProducts(API)
  return (
    <section>
      <div className="productList">
        {products.map(() => {
        return <ProductoItem />
        })}
      </div>
    </section>

  )
}

export default ProductList