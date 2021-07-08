import React from "react";
import influencerStyles from "../styles/Influencer.module.css";
import Link from "next/link";
import { Avatar, Row, Col, Progress } from "antd";

function InfluencerItem({ influencer, index, color }) {
  return (
    <Link href="/influencer/[id]" as={`/influencer/${influencer.id}`}>
      <a className={influencerStyles.card}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            style={{ marginTop: -90, border: "5px solid #fff" }}
            size={160}
            src={influencer.avatar}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Avatar
            style={{ backgroundColor: color, verticalAlign: "middle" }}
            size="large"
          >
            {index}
          </Avatar>
          <h2>{influencer.rank} &uarr;</h2>
        </div>

        <div>
          <h3 style={{ paddingBottom: 0, marginBottom: 0 }}>
            {influencer.name}
          </h3>
          <span>{influencer.email}</span>
        </div>
        <Progress
          strokeColor={color}
          showInfo={false}
          style={{ marginBottom: 16, marginTop: 16 }}
          percent={influencer.progress}
        />
        <Row align="middle" justify="center">
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
            span={8}
          >
            <h5>Followers</h5>
            <h3>{influencer.followers}k</h3>
          </Col>
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
            span={8}
          >
            <h5>Interactions</h5>
            <h3>{influencer.interactions}k</h3>
          </Col>
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
            span={8}
          >
            <h5>Influence</h5>
            <h3>{influencer.influence}</h3>
          </Col>
        </Row>
      </a>
    </Link>
  );
}

export default InfluencerItem;
