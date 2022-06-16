import React from 'react'
import { Link } from 'react-router-dom'
import style from '../css/module/gallery.module.css'
import queso from '../assets/pictures/queso.jpg'

function Gallery({ data }) {
  return (
    <section id='Productos' className={style.section}>
      <div className={style.title}>
        <h2>Nuestros Productos</h2>
      </div>
      <div className={style.gallery}>
        <div className={style.data}>
          <h3>{data.chess[0]}</h3>
          <p>{data.chess[1]}</p>
          <Link to='/store' className={style.link} >{data.chess[2]}</Link>
        </div>
        <figure className={style.figure}>
          <img className={style.queso} src={queso} alt='queso enmantado'></img>
        </figure>
      </div>
    </section>
  )
}

export default Gallery