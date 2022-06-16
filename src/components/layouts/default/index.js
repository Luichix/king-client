import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export const DefaultLayout = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
)

export default DefaultLayout
