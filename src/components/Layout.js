import React from 'react'
import style from '../styles/Layout.css'

const Layout = ({ children }) => (
  <div className={style.container}>
    {children}
  </div>
)

export default Layout