import React from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Card, Row, Col } from "antd";
const { Header, Sider, Content } = Layout;

export default function Home() {
  return (
    <Layout className="layout">
      <Sider trigger={null} style={{position:'fixed' , height: '100vh'}}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Danh sach nhan vien",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "Kho",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
        >
          
        </Header>
        <Content
          style={{
            marginLeft : 210,
            margin: "20px 16px",
            marginTop:70
          }}
        >
          <Row gutter={16}>
            <Col span={6} style={{marginTop:10}}>
              <Card
                hoverable
                cover={
                  <img
                    alt="example"
                    src="https://anhdep123.com/top-300-hinh-nen-anh-thien-nhien-4k-chat-luong-cao/hinh-nen-thien-nhien-4k/"
                  />
                }
              >
                <h3>ID :</h3>
                <h3>Name :</h3>
              </Card>
            </Col>
            <Col span={6} style={{marginTop:10}}>
              <Card
                hoverable
                cover={
                  <img
                    alt="example"
                    src="https://anhdep123.com/top-300-hinh-nen-anh-thien-nhien-4k-chat-luong-cao/hinh-nen-thien-nhien-4k/"
                  />
                }
              >
                <h3>ID :</h3>
                <h3>Name :</h3>
              </Card>
            </Col>
            <Col span={6} style={{marginTop:10}}>
              <Card
                hoverable
                cover={
                  <img
                    alt="example"
                    src="https://anhdep123.com/top-300-hinh-nen-anh-thien-nhien-4k-chat-luong-cao/hinh-nen-thien-nhien-4k/"
                  />
                }
              >
                <h3>ID :</h3>
                <h3>Name :</h3>
              </Card>
            </Col>
            <Col span={6} style={{marginTop:10}}>
              <Card
                hoverable
                cover={
                  <img
                    alt="example"
                    src="https://anhdep123.com/top-300-hinh-nen-anh-thien-nhien-4k-chat-luong-cao/hinh-nen-thien-nhien-4k/"
                  />
                }
              >
                <h3>ID :</h3>
                <h3>Name :</h3>
              </Card>
            </Col>

            <Col span={6} style={{marginTop:10}}>
              <Card
                hoverable
                cover={
                  <img
                    alt="example"
                    src="https://anhdep123.com/top-300-hinh-nen-anh-thien-nhien-4k-chat-luong-cao/hinh-nen-thien-nhien-4k/"
                  />
                }
              >
                <h3>ID :</h3>
                <h3>Name :</h3>
              </Card>
            </Col>
            <Col span={6} style={{marginTop:10}}>
              <Card
                hoverable
                cover={
                  <img
                    alt="example"
                    src="https://anhdep123.com/top-300-hinh-nen-anh-thien-nhien-4k-chat-luong-cao/hinh-nen-thien-nhien-4k/"
                  />
                }
              >
                <h3>ID :</h3>
                <h3>Name :</h3>
              </Card>
            </Col>
            <Col span={6} style={{marginTop:10}}>
              <Card
                hoverable
                cover={
                  <img
                    alt="example"
                    src="https://anhdep123.com/top-300-hinh-nen-anh-thien-nhien-4k-chat-luong-cao/hinh-nen-thien-nhien-4k/"
                  />
                }
              >
                <h3>ID :</h3>
                <h3>Name :</h3>
              </Card>
            </Col>
            <Col span={6} style={{marginTop:10}}>
              <Card
                hoverable
                cover={
                  <img
                    alt="example"
                    src="https://anhdep123.com/top-300-hinh-nen-anh-thien-nhien-4k-chat-luong-cao/hinh-nen-thien-nhien-4k/"
                  />
                }
              >
                <h3>ID :</h3>
                <h3>Name :</h3>
              </Card>
            </Col>

            <Col span={6} style={{marginTop:10}}>
              <Card
                hoverable
                cover={
                  <img
                    alt="example"
                    src="https://anhdep123.com/top-300-hinh-nen-anh-thien-nhien-4k-chat-luong-cao/hinh-nen-thien-nhien-4k/"
                  />
                }
              >
                <h3>ID :</h3>
                <h3>Name :</h3>
              </Card>
            </Col>
            <Col span={6} style={{marginTop:10}}>
              <Card
                hoverable
                cover={
                  <img
                    alt="example"
                    src="https://anhdep123.com/top-300-hinh-nen-anh-thien-nhien-4k-chat-luong-cao/hinh-nen-thien-nhien-4k/"
                  />
                }
              >
                <h3>ID :</h3>
                <h3>Name :</h3>
              </Card>
            </Col>
            <Col span={6} style={{marginTop:10}}>
              <Card
                hoverable
                cover={
                  <img
                    alt="example"
                    src="https://anhdep123.com/top-300-hinh-nen-anh-thien-nhien-4k-chat-luong-cao/hinh-nen-thien-nhien-4k/"
                  />
                }
              >
                <h3>ID :</h3>
                <h3>Name :</h3>
              </Card>
            </Col>
            <Col span={6} style={{marginTop:10}}>
              <Card
                hoverable
                cover={
                  <img
                    alt="example"
                    src="https://anhdep123.com/top-300-hinh-nen-anh-thien-nhien-4k-chat-luong-cao/hinh-nen-thien-nhien-4k/"
                  />
                }
              >
                <h3>ID :</h3>
                <h3>Name :</h3>
              </Card>
            </Col>

            <Col span={6} style={{marginTop:10}}>
              <Card
                hoverable
                cover={
                  <img
                    alt="example"
                    src="https://anhdep123.com/top-300-hinh-nen-anh-thien-nhien-4k-chat-luong-cao/hinh-nen-thien-nhien-4k/"
                  />
                }
              >
                <h3>ID :</h3>
                <h3>Name :</h3>
              </Card>
            </Col>
            <Col span={6} style={{marginTop:10}}>
              <Card
                hoverable
                cover={
                  <img
                    alt="example"
                    src="https://anhdep123.com/top-300-hinh-nen-anh-thien-nhien-4k-chat-luong-cao/hinh-nen-thien-nhien-4k/"
                  />
                }
              >
                <h3>ID :</h3>
                <h3>Name :</h3>
              </Card>
            </Col>
            <Col span={6} style={{marginTop:10}}>
              <Card
                hoverable
                cover={
                  <img
                    alt="example"
                    src="https://anhdep123.com/top-300-hinh-nen-anh-thien-nhien-4k-chat-luong-cao/hinh-nen-thien-nhien-4k/"
                  />
                }
              >
                <h3>ID :</h3>
                <h3>Name :</h3>
              </Card>
            </Col>
            <Col span={6} style={{marginTop:10}}>
              <Card
                hoverable
                cover={
                  <img
                    alt="example"
                    src="https://anhdep123.com/top-300-hinh-nen-anh-thien-nhien-4k-chat-luong-cao/hinh-nen-thien-nhien-4k/"
                  />
                }
              >
                <h3>ID :</h3>
                <h3>Name :</h3>
              </Card>
            </Col>
            
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
}
