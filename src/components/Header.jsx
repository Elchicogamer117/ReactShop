import React, { useContext, useState } from 'react'
import Menucomp from '../components/Menu'
import logo from '@logos/yardSaleFull.svg'
import menu from '@icons/menu.svg'
import arrow from '@icons/arrow.svg'
import scart from '@icons/shoppingCart.svg'
import AppContext from '../context/AppContext'
import '@styles/components/Header.scss'

const Header = () => {
  const [toggle, setToggle] = useState(false)
  const { state: {cart} } = useContext(AppContext)

  const handleToggle = () => {
    setToggle(!toggle)
  }
  return (
    <nav>
      <img src={menu} alt="menu" className="menuNav" />
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
          <li onClick={handleToggle} className="navbarEmail"> 
            elchicogamer117@git.com
            <img src={arrow} alt="arrow" />
          </li>
          <li className="navbarShoppingCart">
            <img src={scart} alt="shoppingCart" />
            {cart.length > 0 ? <div> {cart.length > 9 ? '+9' : cart.length} </div> : null}
          </li>
        </ul>
      </div>
      {toggle && <Menucomp />}
    </nav>

  )
}

export default Header
