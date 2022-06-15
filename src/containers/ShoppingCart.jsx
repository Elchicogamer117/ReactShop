import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import ShoppingCartItem from '@components/ShoppingCartItem'
import arrow from '@icons/arrow.svg'
import '@styles/containers/ShoppingCart.scss'

const ShoppingCart = () => {
  const { state } = useContext(AppContext)
  return (
  <aside className="shoppingCart">
    <div className="titleContainer">
      <img src={arrow} alt="arrow" />
      <p className="title"> Shooping cart </p>
    </div>
    <div class="myOrderContent">
      { state.cart.map(product => {
        return <ShoppingCartItem product={product} id={`item-${product.id}`} />
      }) }
      
      <div className="order">
        <p>
          <span> Total </span>
        </p>
        <p> $560  </p>
      </div>
      <button className="primaryButton">
        Checkout
      </button>
    </div>
  </aside>
  )
}

export default ShoppingCart