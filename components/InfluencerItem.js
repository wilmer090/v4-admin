import React from "react";
import influencerStyles from "../styles/Influencer.module.css";
import Link from "next/link";
import { Avatar, Row, Col, Progress } from "antd";
import { ExclamationCircleFilled } from '@ant-design/icons';

function InfluencerItem({ influencer, index, color }) {
  return (
    <Link href="/influencer/[id]" as={`/influencer/${influencer.id}`}>
      <div className={influencerStyles.card}>
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
          <a href="" style={{color: "gray"}}>{influencer.email}</a>
        </div>

        <div
          style={{ backgroundColor: "#F4F9FD", padding: 8, borderRadius: 5, marginTop: 16 }}
        >
          <Row>
            <Col span={18}>
              <span>Social Capital</span>&nbsp;
              <ExclamationCircleFilled/>
            </Col>
            <Col style={{textAlign: "right"}} span={6}>
              <span>{influencer.progress}/10</span>
            </Col>
          </Row>
          <Progress
            strokeColor={color}
            showInfo={false}
            style={{ marginBottom: 16 }}
            percent={influencer.progress * 10}
          />
        </div>

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
      </div>
    </Link>
  );
}

export default InfluencerItem;
