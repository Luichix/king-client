import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import style from './gallery.module.css'
import queso from 'queso.jpg'

function Gallery({ data }) {
  return (
    <section id="Productos" className={style.section}>
      <div className={style.title}>
        <h2>Nuestros Productos</h2>
      </div>
      <div className={style.gallery}>
        <div className={style.data}>
          <h3>{data.chess[0]}</h3>
          <p>{data.chess[1]}</p>
          <Link href="/store">
            <a className={style.link}>{data.chess[2]}</a>
          </Link>
        </div>
        <figure className={style.figure}>
          <Image
            className={style.queso}
            src={queso}
            alt="queso enmantado"
          ></Image>
        </figure>
      </div>
    </section>
  )
}

export default Gallery
