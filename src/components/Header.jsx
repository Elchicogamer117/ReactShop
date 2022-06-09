import React from 'react'
import '../styles/components/Header.scss'

const Header = () => {
  return (
    <nav>
      <img src="./assets/icons/iconMenu.svg" alt="menu" className="menu" />
      <div className="navbarLeft">
        <img src="./assets/logos/logoYardSale.svg" alt="logo" className="logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbarRight">
        <ul>
          <li className="navbarEmail"> elchicogamer117@git.com
            <img src="./assets/icons/flechita.svg" alt />
          </li>
          <li className="navbarShoppingCard">
            <img src="./assets/icons/iconShoppingCard.svg" alt="shoppingCard" />
            <div> 2 </div>
          </li>
        </ul>
      </div>
    </nav>

  )
}

export default Header
