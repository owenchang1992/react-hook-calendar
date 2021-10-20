import React from 'react';
import '../styles/Layout.css';

const Layout = ({ children }) => (
  <div className="container">
    {children}
  </div>
)

export default Layout;