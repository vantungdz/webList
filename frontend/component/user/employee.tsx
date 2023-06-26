import { Card, Col, Layout, Row, Input } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { EmployeeModel } from "../../model/modelEmployee";
const { Header, Sider, Content } = Layout;
const { Search } = Input;

type EmployeeProps = {
  data: EmployeeModel[];
};
const Employee: React.FC<EmployeeProps> = ({ data }) => {
  return (
    <>
      <Header style={{ padding: 0, background: "#f3f3" , marginLeft: 16 }}>
        <Row gutter={16} style={{marginTop:15}}>
          <Col span={19}></Col>
          <Col span={4}><Search placeholder="input search text" allowClear /></Col>
          <Col span={1}></Col>
        </Row>
      </Header>
      <Content
        style={{
          margin: "16px 16px 0",
          overflow: "initial",
          background: "yellow",
        }}
      >
        <div
          style={{
            padding: "10px 16px",
          }}
        >
          <Row gutter={16}>
            {data &&
              data.map((item: EmployeeModel) => (
                <Col span={6} style={{ marginTop: 10 }} key={item._id}>
                  <Link href={`/${item._id}`}>
                    <Card
                      hoverable
                      cover={
                        <Image
                          alt="avatar"
                          src={item.image}
                          height={200}
                          width={350}
                        />
                      }
                    >
                      <h4>Name : {item.name}</h4>
                      <h4>Email : {item.email}</h4>
                    </Card>
                  </Link>
                </Col>
              ))}
          </Row>
        </div>
      </Content>
    </>
  );
};

export default Employee;
