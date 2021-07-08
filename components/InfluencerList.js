import React from "react";
import influencerStyle from "../styles/Influencer.module.css";
import InfluencerItem from "./InfluencerItem";
import { Row, Col } from "antd";

function InfluencerList({ influencers }) {
  return (
      <Row align="top" justify="space-around" style={{backgroundColor: "rebeccapurple", width: "100%"}}>
        {influencers.map((influencer, index) => (
          <Col xs={24} sm={24} md={12} lg={4} xl={4} key={index}>
            <InfluencerItem
              key={influencer.id}
              influencer={influencer}
              index={index + 1}
            />
          </Col>
        ))}
      </Row>
  );
}

export default InfluencerList;
