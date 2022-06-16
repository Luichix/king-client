import React from 'react'
import style from './social.module.css'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'

function Social() {
  return (
    <div className={style.social}>
      <Link
        href="https://www.facebook.com/Delquesoselrey"
        target="_blank"
        rel="noreferrer"
      >
        <a>
          <FaFacebook />
        </a>
      </Link>
      <Link
        href="https://www.instagram.com/quesos_el_rey"
        target="_blank"
        rel="noreferrer"
      >
        <a>
          <FaInstagram />
        </a>
      </Link>
      <Link
        href="https://wa.me/50581558122?text=Hola,%20te%20contacto%20desde%20tu%20pagina%20web"
        target="_blank"
        rel="noreferrer"
      >
        <a>
          <FaWhatsapp />
        </a>
      </Link>
    </div>
  )
}

export default Social
