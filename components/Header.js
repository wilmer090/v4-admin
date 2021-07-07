import React from 'react'
import layoutStyles from '../styles/Layout.module.css'
import Link from 'next/link'

function Header() {
  return (
    <div className={layoutStyles.header}>
      <h3 className={layoutStyles.title}>
        <Link href="/">
          <a>Profiler</a>
        </Link>
      </h3>

      <ul className={layoutStyles.nav}>
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
