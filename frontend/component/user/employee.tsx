import { Card, Col, Layout, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { EmployeeModel } from "../../model/modelEmployee";

type EmployeeProps = {
  data: EmployeeModel[];
};
const Employee: React.FC<EmployeeProps> = ({ data }) => {
  return (
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
  );
};

export default Employee;
