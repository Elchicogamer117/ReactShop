import React from 'react'
import logo from '@logos/yardSaleFull.svg'
import '@styles/pages/Login.scss'

const Login = () => {
  return (
    <div className="login">
      <div className="loginContainer">
        <img src={logo} alt="logo" className="logo" /> 

        <form action="/" className="form">
          <label htmlFor="email" className="label"> Email address </label>
          <input type="text" id="email" placeholder="elchicogamer117@git.com" className="input inputEmail" />
          <label htmlFor="Password" className="label"> Password </label>
          <input type="password" id="Password" placeholder="**********" className="input inputPwd" />
          <input type="submit" defaultValue="Log in" className="primaryButton loginButton" />
          <a href="/"> Forgot my password </a>
          <button className="secondaryButton signUpButton"> Sign up </button>
        </form>

      </div>
    </div>
  )
}

export default Login