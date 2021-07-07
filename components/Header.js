import React from 'react'
import layoutStyles from '../styles/Layout.module.css'
import Link from 'next/link'
import {Button} from 'antd'

function Header() {
  return (
    <div className={layoutStyles.header}>
      <h3 className={layoutStyles.title}>
        <Link href="/">
          <a>Profiler</a>
        </Link>
      </h3>

      <div className={layoutStyles.nav}>
        <Link href="/about">
          <Button type="text">About Us</Button>
        </Link>
        <Link href="/contact">
          <Button type="text">Contact</Button>
        </Link>
      </div>

    </div>
  )
}

export default Header
