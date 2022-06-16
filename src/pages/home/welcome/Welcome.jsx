import React from 'react'
import style from '../css/module/welcome.module.css'
import { Link } from 'react-router-dom'
import { MdAccessTimeFilled } from 'react-icons/md'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { BsTelephoneFill } from 'react-icons/bs'

function Home({ data }) {
  const icons = {
    0: <MdAccessTimeFilled />,
    1: <FaMapMarkerAlt />,
    2: <BsTelephoneFill />,
  }
  return (
    <section id="Inicio" className={style.welcome}>
      <div className={style.note}>{data.note}</div>
      <h2 className={style.title}>{data.welcome}</h2>
      <p className={style.comment}>{data.comment}</p>
      <span className={style.store}>
        <b>
          <Link to="/store" className={style.link}>
            {data.store}
          </Link>
        </b>
      </span>
      <ul className={style.list}>
        {data.info.map((e, i) => (
          <li key={i} className={style.group}>
            <i className={style.icons}>{icons[i]}</i>
            <span className={style.item}>
              <b>{e[0]}</b>
              <em className={style.text}>{e[1]}</em>
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Home
