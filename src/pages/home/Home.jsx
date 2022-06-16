import React from 'react'
import style from './home.module.css'
import Home from './welcome'
import History from './history'
import Gallery from './gallery'
import Contact from './contact'

const Main = () => {
  return (
    <div className={style.main}>
      <Home />
      <History />
      <Gallery />
      <Contact />
    </div>
  )
}

export default Main
