import React from 'react'
import Social from '../social'
import style from './footer.module.css'

function Footer() {
  return (
    <footer id="footer" className={style.footer}>
      <h2 className={style.title}>Delicias de Quesos El Rey</h2>
      <Social />
      <div className={style.credits}>
        <i>Created © 2022</i>
        <i>
          Diseñado por:{' '}
          <a
            className={style.me}
            href="https://luichix.github.io/portafolio/"
            target="_blank"
            rel="noreferrer"
          >
            <code>Luichix Rex</code>
          </a>
        </i>
      </div>
    </footer>
  )
}

export default Footer
