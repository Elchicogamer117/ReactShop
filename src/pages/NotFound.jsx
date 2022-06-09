import React from 'react'
import '../styles/NotFound.css'
import littleHalo from '../../public/assets/images/NotFound.png'

const NotFound = () => {
  return (
    <div className="container">
      <section className="card">
        <div className="number"> 404 </div>
        <div className="text"> Not Found </div>
        <img src={littleHalo} alt="errorImage" />
      </section>
    </div>


  )
}

export default NotFound