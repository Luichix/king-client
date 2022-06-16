import React from 'react'
import style from './history.module.css'
import history from 'history.jpg'
import Image from 'next/image'

function History({ data }) {
  return (
    <section id="Nosotros" className={style.section}>
      <div className={style.gallery}>
        <div className={style.history}>
          <h2 className={style.title}>Nuestros Inicios</h2>
          {data.history.map((e, i) => (
            <p key={i} className={style.data}>
              {e}
            </p>
          ))}
        </div>
        <figure className={style.figure}>
          <Image
            src={history}
            alt="quesos el rey"
            className={style.imagen}
          ></Image>
        </figure>
      </div>
    </section>
  )
}

export default History
