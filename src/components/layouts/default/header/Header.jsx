import React, { useState } from 'react'
import style from '../css/module/header.module.css'
import { FaBars } from 'react-icons/fa'
import { VscChromeClose } from 'react-icons/vsc'

import Sydenav from '../sidenav/Sidenav'

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
