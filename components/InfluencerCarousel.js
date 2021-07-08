import React, { useState, useRef } from "react";
import { Carousel, Row, Col } from "antd";
import InfluencerItem from "./InfluencerItem";
import influencerStyle from "../styles/Influencer.module.css";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
const contentStyle = {
  height: "10px",
  width: "50px",
  background: "#364d79",
};

function InfluencerCarousel({ influencers, title, color }) {
  const [slide, setSlide] = useState(0);

  const slider = useRef();

  return (
    <div style={{ width: "100%" }}>

      <Row align="top" justify="start" style={{ marginTop: 24, width: "88%",  margin: "auto" }}>
        <Col span={20}>
          <h1 style={{ textTransform: "uppercase", color}}>
            { title }
          </h1>
        </Col>
        <Col style={{ textAlign: "right", paddingRight: "8px" }} span={4}>
          <h4>View Full List</h4>
        </Col>
      </Row>

      <Row align="top" justify="start" style={{ width: "88%", margin: "auto" }}>
        <Col span={20}>
          <span>
            Influencer according to industry or interest category whose relative
            importance is measured on a weekly or monthly basis
          </span>
        </Col>
        <Col style={{ textAlign: "right", paddingRight: "8px" }} span={4}>
          <span
            onClick={() => slider.current.next()}
            style={{ marginRight: "8px", cursor: "pointer" }}
          >
            <LeftOutlined />
          </span>
          <span
            onClick={() => slider.current.prev()}
            style={{ cursor: "pointer" }}
          >
            <RightOutlined />
          </span>
        </Col>
      </Row>

      <Carousel
        style={{ paddingBottom: "64px" }}
        dotPosition="bottom"
        dotsClass={influencerStyle.slickdots}
        arrows
        ref={(ref) => {
          slider.current = ref;
        }}
      >
        {[...Array(influencers.length / 5)].map((_, i) => (
          <div>
            <div className={influencerStyle.grid}>
              {influencers
                .slice(i * 5, (i + 1) * 5)
                .map((influencer, index) => (
                  <InfluencerItem
                    key={influencer.id}
                    influencer={influencer}
                    index={index + 1 + i * 5}
                    color={color}
                  />
                ))}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default InfluencerCarousel;
