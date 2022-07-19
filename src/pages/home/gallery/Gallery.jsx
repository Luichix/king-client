import React from 'react'
import Link from 'next/link'
import style from './gallery.module.css'
import word from '../../../data/gallery.json'
import NoSsr from '../../../components/common/NoSsr'

function Gallery() {
  const data = word['en']
  return (
    <section id="Productos" className={style.section}>
      <div className={style.title}>
        <h2>Nuestros Productos</h2>
      </div>
      <div className={style.gallery}>
        <div className={style.data}>
          <h3>{data.producto[0]}</h3>
          <p>{data.producto[1]}</p>
          <Link href="/store">
            <a className={style.link}>{data.producto[2]}</a>
          </Link>
        </div>
        <figure className={style.figure}>
          <NoSsr>
            <img
              className={style.queso}
              src={'/queso.jpg'}
              alt="queso enmantado"
            ></img>
          </NoSsr>
        </figure>
      </div>
    </section>
  )
}

export default Gallery
