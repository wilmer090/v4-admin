import React from 'react'
import influencerStyles from '../styles/Influencer.module.css'
import Link from 'next/link'
import { Avatar, Row, Col } from 'antd'

function InfluencerItem({influencer, index}) {
  return (
    <Link href="/influencer/[id]" as={`/influencer/${influencer.id}`}>
      <a className={influencerStyles.card}>
        <div style={{display:'flex', justifyContent: 'center', alignItems:'center'}}>
          <Avatar size={128} src={influencer.avatar} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <Avatar style={{ backgroundColor: "#3F8CFF", verticalAlign: 'middle' }} size="large">{index}</Avatar>
          <h2>{influencer.rank} &uarr;</h2>
        </div>

        <div style={{marginBottom: 32}}>
          <h1 style={{paddingBottom: 0, marginBottom: 0}}>{influencer.name}</h1>
          <span>{influencer.email}</span>
        </div>

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
