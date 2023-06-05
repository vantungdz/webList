import {
  DesktopOutlined,
  ContainerOutlined,
  PieChartOutlined,
  MailOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { Card, Carousel, Image, Row, Col, Menu } from "antd";
import { useState } from "react";
import List from "./commponent/list";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("Option 3", "3", <ContainerOutlined />),
  getItem("Navigation One", "sub1", <MailOutlined />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Option 7", "7"),
    getItem("Option 8", "8"),
  ]),
  getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Submenu", "sub3", null, [
      getItem("Option 11", "11"),
      getItem("Option 12", "12"),
    ]),
  ]),
];
const App = () => {
  return (
    <div style={{ margin: 10 }}>
      <Row gutter={5}>
        <Col span={4}>
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            theme="light"
            items={items}
          />
        </Col>
        <Col span={20}>
          <List />
        </Col>
      </Row>
    </div>
  );
};
export default App;
