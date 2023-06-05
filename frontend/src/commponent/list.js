import React, { useCallback } from "react";
import { Card, Carousel, Image, Row, Col } from "antd";

function List() {
  const onClickReference = useCallback(() => {
    alert("aaaa");
  }, []);

  return (
      <Row gutter={5}>
        <Col span={6}>
          <Card
            onClick={onClickReference}
            className="card"
            hoverable
            cover={
              <Carousel autoplay>
                <div>
                  <Image src="https://i.imgur.com/MWzV27w.jpg" />
                </div>
                <div>
                  <Image src="https://i.imgur.com/PBGq1ov.jpg" />
                </div>
                <div>
                  <Image src="https://i.imgur.com/MWzV27w.jpg" />
                </div>
                <div>
                  <Image src="https://i.imgur.com/PBGq1ov.jpg" />
                </div>
              </Carousel>
            }
          >
            <h2>Fill Name</h2>
            <h4>Description</h4>
          </Card>
        </Col>
      </Row>
  );
}

export default List;
