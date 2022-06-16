import React from 'react'
import style from '../css/module/home.module.css'
import Header from '../../components/layouts/default/header/Header'
import Home from './welcome/Welcome'
import History from './history/History'
import data from '../../data/info'
import Gallery from './gallery/Gallery'
import Contact from './contact/Contact'
import Footer from '../../components/layouts/default/footer/Footer'

const Main = () => {
  return (
    <main id="main" className={style.main}>
      <Header />
      <Home data={data.home} />
      <History data={data} />
      <Gallery data={data.producto} />
      <Contact contact={data.contact} form={data.form} />
      <Footer />
    </main>
  )
}

export default Main
