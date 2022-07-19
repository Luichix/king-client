import React from 'react'
import style from './history.module.css'
import word from '../../../data/history.json'
import NoSsr from '../../../components/common/NoSsr'

function History() {
  const data = word['es']
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
          <NoSsr>
            <img
              src={'/history.jpg'}
              alt="quesos el rey"
              className={style.imagen}
            ></img>
          </NoSsr>
        </figure>
      </div>
    </section>
  )
}

export default History
