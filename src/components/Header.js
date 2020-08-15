import React from 'react'
import { Layout, Typography } from "antd";

const { Title } = Typography;
const { Header } = Layout;

export default () => {
    return (
      <Header className="header">
        <Title level={3}>Касса</Title>
        <Title level={4}>Калькулятор расходов</Title>
      </Header>
    );
}
