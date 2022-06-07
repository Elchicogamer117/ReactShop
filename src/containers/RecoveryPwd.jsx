import React from 'react'
import '../styles/RecoveryPwd.scss'
import logoComplete from '../../public/assets/logos/logoYardSaleComplete.svg'
import email from '../../public/assets/icons/email.svg'

const RecoveryPwd = () => {
  return (
    <div className="login">
    <div className="formContainer">
      <img src={ logoComplete } alt="logo" className="logo" /> 
      <h1 className="title"> Email has been sent! 📧 </h1>
      <p className="subtitle"> Please check your inbox for instructions on how to reset the paswword 😃</p>

      <div className="emailImage">
        <img src={ email } alt="email" />
      </div>

      <button className="primaryButton"> Login </button>
      <p className="resend">
        <span>Didn't receive the email? </span>
        <a href="/"> Resend </a>
      </p>
    </div>
  </div>
  )
}

export default RecoveryPwd