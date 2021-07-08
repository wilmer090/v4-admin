import React from 'react'
import InfluencerItem from '../../components/InfluencerItem';
import { Row, Col } from 'antd';
import "antd/dist/antd.css";
import influencerStyle from "../../styles/Influencer.module.css";
import styles from "../../styles/Layout.module.css";

export default function index({ influencers }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Row justify="space-around">
          {influencers.map((influencer, index) => (
              <Col key={influencer.id} xs={24} sm={24} md={12} lg={4} xl={4} key={index} style={{ margin: 1, width: "230px"}}>
                <InfluencerItem
                  influencer={influencer}
                  index={index + 1}
                  color={"#0070f3"}
                />
              </Col>
            ))}
        </Row>
    </main>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:8000/influencers`);
  
  const influencers = await res.json();
  return {
    props: {
      influencers,
    },
  };
};

