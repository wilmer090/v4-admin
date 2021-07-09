import React from "react";
import InfluencerItem from "./InfluencerItem";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import styles from "../styles/Layout.module.css";
import { CaretDownOutlined } from "@ant-design/icons";

function InfluencerList({ influencers, handleClick, COLOR, total, title }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Row align="end" justify="end" style={{ marginTop: 24, width: "100%" }}>
          <Col xs={24} sm={24} md={24} lg={17} xl={17}>
            <h1
              style={{
                textTransform: "uppercase",
                color: COLOR,
                paddinng: 0,
                margin: 0,
                marginBottom: 8,
              }}
            >
              {title}
            </h1>
          </Col>
          <Col
            style={{ padding: "0 8px 8px 0", textAlign: "right" }}
            xs={24}
            sm={24}
            md={24}
            lg={7}
            xl={7}
          >
            <span
              style={{
                textDecoration: "underline",
                textAlign: "end",
                textTransform: "uppercase",
                cursor: "pointer",
                marginRight: 8,
              }}
            >
              List View
            </span>
            <span
              style={{
                backgroundColor: "#fff",
                padding: "8px",
                border: "1px solid #D8D8D8",
                borderRadius: 8,
                cursor: "pointer",
              }}
            >
              0 - 10 Metric Score &nbsp;
              <CaretDownOutlined />
            </span>
          </Col>
        </Row>
        <Row justify="space-around">
          {influencers.map((influencer, index) => (
            <Col
              key={influencer.id}
              xs={24}
              sm={24}
              md={12}
              lg={4}
              xl={4}
              key={index}
              style={{ margin: 1, width: "230px" }}
            >
              <InfluencerItem
                influencer={influencer}
                index={index + 1}
                color={COLOR}
              />
            </Col>
          ))}
        </Row>

        {influencers.length < parseInt(total) ? (
          <button
            style={{
              backgroundColor: "#fff",
              padding: "8px 16px",
              border: "1px solid #D8D8D8",
              color: "#7D8592",
              borderRadius: 8,
              cursor: "pointer",
              marginTop: 16,
            }}
            onClick={handleClick}
          >
            Load More
          </button>
        ) : null}
      </main>
    </div>
  );
}

export default InfluencerList;
