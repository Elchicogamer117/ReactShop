import React from 'react'
import logoComplete from '../../public/assets/logos/logoYardSaleComplete.svg'
import '../styles/pages/NewPwd.scss'

const NewPwd = () => {
  return (
    <div className="newPwd">
      <div className="newPwdContainer">

        <img src={logoComplete} alt="logo" className="logo" /> 
        <h1 className="title"> Create a new password </h1>
        <p className="subtitle"> Enter a new password for your account</p>

        <form action="/" className="form">
          <label htmlFor="password" className="label"> Password </label>
          <input type="password" id="password" placeholder="**********" className="input inputPwd" />

          <label htmlFor="rePassword" className="label"> Re-enter password </label>
          <input type="password" id="rePassword" placeholder="**********" className="input inputPwd" />

          <input type="submit" defaultValue="Confirm" className="primaryButton loginButton" />
        </form>

      </div>
    </div>
  )
}

export default NewPwd
