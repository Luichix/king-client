import React, { useState } from 'react'
import style from './header.module.css'
import Sydenav from '../sidenav'
import { FaBars } from 'react-icons/fa'
import { VscChromeClose } from 'react-icons/vsc'

function Header() {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    if (nav) setNav(false)
    else setNav(true)
  }

  return (
    <header id="header" className={style.header}>
      <h1 className={style.title}>Delicias de Quesos El Rey</h1>
      <span className={style.bar} onClick={handleNav}>
        {nav ? <VscChromeClose /> : <FaBars />}
      </span>
      <Sydenav nav={nav}></Sydenav>
    </header>
  )
}

export default Header
