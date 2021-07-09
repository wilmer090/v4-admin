import React from "react";
import influencerStyles from "../styles/Influencer.module.css";
import Link from "next/link";
import { Avatar, Row, Col, Progress, Tooltip } from "antd";
import {
  ExclamationCircleFilled,
  ArrowDownOutlined,
  ArrowUpOutlined,
  RetweetOutlined,
} from "@ant-design/icons";
import LineChart from "./LineChart";

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
            size={32}
          >
            {index}
          </Avatar>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <span style={{ fontSize: "12px" }}>({influencer.rank})</span>
            <span>
              {influencer.rank < influencer.prevRank ? (
                <ArrowUpOutlined style={{ color: "green", fontSize: "16px" }} />
              ) : influencer.rank === influencer.prevRank ? (
                <RetweetOutlined style={{ fontSize: "16px" }} />
              ) : (
                <ArrowDownOutlined style={{ color: "red", fontSize: "16px" }} />
              )}
            </span>
          </div>
        </div>

        <div>
          <h3 style={{ paddingBottom: 0, marginBottom: 0 }}>
            {influencer.name}
          </h3>
          <a href="" style={{ color: "gray" }}>
            {influencer.email}
          </a>
        </div>

        <div
          style={{
            backgroundColor: "#F4F9FD",
            padding: 8,
            borderRadius: 5,
            marginTop: 16,
          }}
        >
          <Row>
            <Col span={18}>
              <span style={{marginRight: 8}}>Social Capital</span>
              <Tooltip placement="right" title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." color={color}>
                <ExclamationCircleFilled />
              </Tooltip>
            </Col>
            <Col style={{ textAlign: "right" }} span={6}>
              <span>{influencer.progress}/10</span>
            </Col>
          </Row>
          <Progress
            strokeColor={color}
            showInfo={false}
            style={{ marginBottom: 16 }}
            percent={influencer.progress * 10}
          />
          <LineChart data={influencer.lineChartData} color={color} />
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
