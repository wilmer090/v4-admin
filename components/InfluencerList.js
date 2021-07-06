import React from 'react'
import influencerStyle from '../styles/Influencer.module.css'
import InfluencerItem from './InfluencerItem'

function InfluencerList({influencers}) {
  return (
    <div className={influencerStyle.grid}>
      {influencers.map(influencer => (
        <InfluencerItem influencer={influencer} />
      ))}
    </div>
  )
}

export default InfluencerList
