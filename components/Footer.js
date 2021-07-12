import React from 'react'
import Link from 'next/link'
import layoutStyles from '../styles/Layout.module.css'

function Footer() {
  let year = new Date().getFullYear() // display current year

  return (
    <div className={layoutStyles.footer}>
      <div>
        <Link href="/about">
          <a>About Us</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>
      <hr />
      <div>
        &copy; {year} Media Meter Inc. All rights reserved.
      </div>
    </div>
  )
}

export default Footer
