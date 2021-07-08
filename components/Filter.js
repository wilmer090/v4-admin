import React from "react";
import { Row, Col, Tag, Typography, Select, Space } from "antd";

const { Title } = Typography;
const { Option } = Select;
const provinceData = ["Philippines", "Singapore"];
const dateRangeData = ["Today", "This Week", "This Month"];
const tags = [
  "Covid-19",
  "Politics",
  "Economy",
  "Healthcare",
  "Business",
  "Technology",
];

function Filter() {
  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <Title>I want to know the best influencers for</Title>
      <Row align="middle" justify="center">
        <Col flex="1">
          <Space size={4} wrap>
            {tags.map((tag) => (
              <Tag key={tag} color="blue">{tag}</Tag>
            ))}
            <Tag color="blue">+ Add Topic</Tag>
          </Space>
        </Col>
      </Row>

      <Row
        align="middle"
        justify="center"
        style={{ margin: "24px 0px", width: "100%" }}
      >
        <Col
          span={24}
          style={{
            padding: "16px",
            border: "1px solid whitesmoke",
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Select defaultValue={provinceData[0]} style={{ width: 120 }}>
            {provinceData.map((province) => (
              <Option key={province}>{province}</Option>
            ))}
          </Select>
          <Select defaultValue={dateRangeData[0]} style={{ width: 120 }}>
            {dateRangeData.map((date) => (
              <Option key={date}>{date}</Option>
            ))}
          </Select>
        </Col>
      </Row>
    </div>
  );
}

export default Filter;
