import React from 'react'
import styles from './home.module.css'
import Welcome from './welcome/Welcome'
import History from './history/History'
import Gallery from './gallery/Gallery'
import Contact from './contact/Contact'

const Home = () => {
  return (
    <div className={styles.main}>
      <Welcome />
      <History />
      <Gallery />
      <Contact />
    </div>
  )
}

export default Home
