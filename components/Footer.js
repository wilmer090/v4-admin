import React from 'react'
import Link from 'next/link'
import layoutStyles from '../styles/Layout.module.css'

function Footer() {
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
        &copy; 2021 Media Meter Inc. ALl rights reserved.
      </div>
    </div>
  )
}

export default Footer
