import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../containers/Layout'
import Login from '../containers/Login'
import RecoveryPwd from '../containers/RecoveryPwd'
import '../styles/global.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Layout>
          <Route exact path = '/' element = { Home } />
          <Route exact path = '/login' element = { Login } />
          <Route exact path = 'recoveryPwd' element = { RecoveryPwd } />
          <Route element = {NotFound} />
        </Layout>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App