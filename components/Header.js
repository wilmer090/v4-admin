import React from 'react'
import headerStyles from '../styles/Header.module.css'
import Link from 'next/link'

function Header() {
  return (
    <div className={headerStyles.container}>
      <h1 className={headerStyles.title}>
        <Link href="/">
          <a>Profiler</a>
        </Link>
      </h1>

      <ul className={headerStyles.nav}>
        <li>
          <Link href="/about">
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>

    </div>
  )
}

export default Header
