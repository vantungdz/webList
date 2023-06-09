import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme, Row, Col, Card } from "antd";
import Employee from "../component/user/employee";
import EmployeeDetail from "../component/user/employeeDetail";
import { EmployeeModel } from "@/model/modelEmployee";

const { Header, Sider,Content } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  patch?: React.ReactNode
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    patch,
  } as MenuItem;
}

const items: MenuItem[] = [getItem("Danh sach NV", "1", <UserOutlined />)];

const App: React.FC = () => {
  const [data, setData] = useState<EmployeeModel[]>([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/fetchList`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log("err", error));
  }, []);

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items}
        />
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 180 }}>
        <Employee data={data}/>
        {/* <EmployeeDetail /> */}
      </Layout>
    </Layout>
  );
};

export default App;
