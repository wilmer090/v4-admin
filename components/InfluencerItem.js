import React from 'react'
import influencerStyles from '../styles/Influencer.module.css'
import Link from 'next/link'

function InfluencerItem({influencer}) {
  return (
    <Link href="/influencer/[id]" as={`/influencer/${influencer.id}`}>
      <a className={influencerStyles.card}>
        <h3>{influencer.name} &rarr;</h3>
        <p>{influencer.email}</p>
      </a>  
    </Link>
  )
}

export default InfluencerItem
