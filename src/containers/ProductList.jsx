import React, { useEffect, useState } from 'react'
import ProductoItem from '@components/ProductoItem'
import '@styles/containers/ProductList.scss'
import axios from 'axios';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
  const [products, setProducts] = useState([])

  //*! Warning: useEffect must not return anything besides a function
  // useEffect(async() => {
  //   const response = await axios.get(API)
  //   setProducts(response.data)
  // },[])
  //*!It looks like you wrote useEffect(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(API)
      setProducts(response.data)
      console.log(response)
    }
    getData()
    }, [])
    
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