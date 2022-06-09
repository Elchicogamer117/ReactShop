import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../containers/Layout'
import Login from '../pages/Login'
import RecoveryPwd from '../pages/RecoveryPwd'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import '../styles/global.css'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path = '/' element = { <Home/> } />
          <Route path = '/login' element = { <Login/> } />
          <Route path = '/recoveryPwd' element = { <RecoveryPwd/> } />
          <Route path = '*' element = { <NotFound/> } />
        </Routes>
      </Layout>
    </BrowserRouter>
    
  )
}

export default App