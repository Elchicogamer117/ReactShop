import React from 'react'
import Layout from '../containers/Layout'
import Login from '../containers/Login'
import '../styles/global.css'

const App = () => {
  return (
    <Layout>
      <Login/> //*? Si no recibe hijos se recomienda un cierre corto
    </Layout>
  )
}

export default App