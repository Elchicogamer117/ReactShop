import React from 'react'
import '../styles/components/Order.scss'

const Order = () => {
  return (
    <div className="order">
      <p>
        <span> 04.25.2021</span>
        <span> 6 articles</span>
      </p>
      <p> $560 </p>
      <img src="../../public/assets/icons/arrow.svg" alt="arrow" />
    </div>
  )
}

export default Order
