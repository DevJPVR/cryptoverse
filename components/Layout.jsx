import React from 'react'
import { Header } from './'

function Layout({ children }) {
  return (
    <>
        <Header />
        {children}
    </>
  )
}

export default Layout