import React, {useState} from "react";
import { Row, Col, Avatar, Divider, Tag, Tabs,Upload,message } from "antd";
import {
  UserOutlined,
  CalendarOutlined,
  HomeOutlined,
  ClusterOutlined,
  LoadingOutlined,
  PlusOutlined
} from "@ant-design/icons";
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import type { UploadChangeParam } from 'antd/es/upload';
import type { TabsProps } from "antd";
import Detail from './detail'
import Experience from './experience'
import Degree from './degree'

const EmployeeDetail: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>();


  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Thông tin chi tiết`,
      children: <Detail/>,
    },
    {
      key: "2",
      label: `Kinh nghiệm làm việc`,
      children: <Experience/>,
    },
    {
      key: "3",
      label: `Bằng cấp/ Trình độ`,
      children: <Degree/>,
    },
  ];

  const onChange = (key: string) => {
    console.log(key);
  };

  const getBase64 = (img: RcFile, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
  };

  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };

  const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <React.Fragment>
      <Row gutter={16}>
        <Col span={8} style={{ padding: 20, background: "#fff" }}>
          <div style={{ textAlign: "center" }}>
            <Upload
              name="avatar"
              listType="picture-circle"
              className="avatar-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? (
                <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
              ) : (
                uploadButton
              )}
            </Upload>
            <h2>Do Van Tung</h2>
            <h4 style={{ marginTop: -12, fontWeight: "normal" }}>
              EaKar, DakLak
            </h4>
          </div>

          <div>
            <p>
              <CalendarOutlined /> 18/06/1998
            </p>
            <p>
              <ClusterOutlined /> VNUHCM - University Of Science
            </p>
            <p>
              <HomeOutlined /> Eakar, DakLak
            </p>
          </div>

          <Divider orientation="left">Skill</Divider>
          <Tag color="#f50">#f50</Tag>
          <Tag color="#2db7f5">#2db7f5</Tag>
          <Tag color="#87d068">#87d068</Tag>
          <Tag color="#108ee9">#108ee9</Tag>

          <Divider orientation="left">Project Participated</Divider>
          <Row gutter={16}>
            <Col span={12}>
              <Avatar src="https://yt3.googleusercontent.com/2Ur5Dhsu9fEQ11zkncsO0NP2Vl6IxAVm-dMTLTKlKsO_bSEVo6qkKImBWq8iKR3fVcjJa4ku-w=s900-c-k-c0x00ffffff-no-rj" />{" "}
              Project 1
            </Col>
            <Col span={12}>
              <Avatar src="https://yt3.googleusercontent.com/2Ur5Dhsu9fEQ11zkncsO0NP2Vl6IxAVm-dMTLTKlKsO_bSEVo6qkKImBWq8iKR3fVcjJa4ku-w=s900-c-k-c0x00ffffff-no-rj" />{" "}
              Project 2
            </Col>
            <Col span={12}>
              <Avatar src="https://yt3.googleusercontent.com/2Ur5Dhsu9fEQ11zkncsO0NP2Vl6IxAVm-dMTLTKlKsO_bSEVo6qkKImBWq8iKR3fVcjJa4ku-w=s900-c-k-c0x00ffffff-no-rj" />{" "}
              Project 3
            </Col>
            <Col span={12}>
              <Avatar src="https://yt3.googleusercontent.com/2Ur5Dhsu9fEQ11zkncsO0NP2Vl6IxAVm-dMTLTKlKsO_bSEVo6qkKImBWq8iKR3fVcjJa4ku-w=s900-c-k-c0x00ffffff-no-rj" />{" "}
              Project 4
            </Col>
            <Col span={12}>
              <Avatar src="https://yt3.googleusercontent.com/2Ur5Dhsu9fEQ11zkncsO0NP2Vl6IxAVm-dMTLTKlKsO_bSEVo6qkKImBWq8iKR3fVcjJa4ku-w=s900-c-k-c0x00ffffff-no-rj" />{" "}
              Project 5
            </Col>
            <Col span={12}>
              <Avatar src="https://yt3.googleusercontent.com/2Ur5Dhsu9fEQ11zkncsO0NP2Vl6IxAVm-dMTLTKlKsO_bSEVo6qkKImBWq8iKR3fVcjJa4ku-w=s900-c-k-c0x00ffffff-no-rj" />{" "}
              Project 6
            </Col>
          </Row>
        </Col>

        <Col span={16}>
          <Tabs onChange={onChange} type="card" items={items} />
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default EmployeeDetail;
