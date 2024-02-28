import React from "react";
import { Typography, Row, Col, Statistic } from "antd";

const { Title } = Typography;

const Homepage = () => {
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row gutter={[32, 32]}>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap:" />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h Volume" />
        </Col>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" />
        </Col>
      </Row>
    </>
  );
};

export default Homepage;
