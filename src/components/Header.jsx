import React from 'react'
import logo from '@logos/yardSaleFull.svg'
import menu from '@icons/menu.svg'
import arrow from '@icons/arrow.svg'
import cart from '@icons/shoppingCart.svg'
import '@styles/components/Header.scss'

const Header = () => {
  return (
    <nav>
      <img src={menu} alt="menu" className="menu" />
      <div className="navbarLeft">
        <img src={logo} alt="logo" className="logoNav" />
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
            <img src={arrow} alt="arrow" />
          </li>
          <li className="navbarShoppingCart">
            <img src={cart} alt="shoppingCart" />
            <div> 2 </div>
          </li>
        </ul>
      </div>
    </nav>

  )
}

export default Header
