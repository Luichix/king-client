import React from 'react'
import Header from './header'
import Footer from './footer'

export const DefaultLayout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)

export default DefaultLayout
