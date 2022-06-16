import React from 'react'
import style from '../css/module/social.module.css'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'

function Social() {
  return (
    <div className={style.social}>
      <a
        href="https://www.facebook.com/Delquesoselrey"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebook />
      </a>
      <a
        href="https://www.instagram.com/quesos_el_rey"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram />
      </a>
      <a
        href="https://wa.me/50581558122?text=Hola,%20te%20contacto%20desde%20tu%20pagina%20web"
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp />
      </a>
    </div>
  )
}

export default Social