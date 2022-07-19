import React from 'react'
import style from './sidenav.module.css'
import { Link as Nav } from 'react-scroll'
import Social from '../social'
import NoSsr from '../../../../components/common/NoSsr'

const elements = ['Inicio', 'Nosotros', 'Productos', 'Contacto']

const Sidenav = ({ nav }) => {
  return (
    <div className={nav ? style.sidenav : style.none}>
      <NoSsr>
        <img
          src={'/logo.png'}
          className={style.logo}
          alt="logo delicias de quesos el rey"
        />
      </NoSsr>
      {elements.map((e, i) => (
        <Nav
          key={i}
          className={style.item}
          activeClass={style.active}
          to={e}
          spy={true}
          smooth="easeInOutQuint"
          offset={0}
          duration={1500}
        >
          <span>{e}</span>
        </Nav>
      ))}
      <span className={style.social}>
        <Social />
      </span>
    </div>
  )
}

export default Sidenav
