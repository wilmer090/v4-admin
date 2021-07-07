import React from 'react'
import influencerStyles from '../styles/Influencer.module.css'
import Link from 'next/link'
import { Avatar, Row, Col } from 'antd'

function InfluencerItem({influencer}) {
  return (
    <Link href="/influencer/[id]" as={`/influencer/${influencer.id}`}>
      <a className={influencerStyles.card}>
        <Avatar size={128} src={influencer.avatar} />
        <h3>{influencer.name} &rarr;</h3>
        <p style={{marginBottom: 16}}>{influencer.email}</p>
        <Row>
          <Col span={8}>
            <h5>Followers</h5>
            <h2>{influencer.followers}</h2>
          </Col>
          <Col span={8}>
            <h5>Interactions</h5>
            <h2>{influencer.interactions}</h2>
          </Col>
          <Col span={8}>
            <h5>Influence</h5>
            <h2>{influencer.influence}</h2>
          </Col>
        </Row>
      </a>  
    </Link>
  )
}

export default InfluencerItem
