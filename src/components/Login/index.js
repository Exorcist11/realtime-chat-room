import React from "react";
import { Row, Col, Button, Typography } from "antd";
const { Title } = Typography;

export default function Login() {
  return (
    <div>
      <Row justify={"center"} style={{ height: 800 }}>
        <Col span={8}>
          <Title style={{ textAlign: "center" }} level={3}>
            Login chat room
          </Title>

          <Button style={{ width: "100%", marginBottom: 5 }}>
            Login with Google
          </Button>

          <Button style={{ width: "100%", marginBottom: 5 }}>
            Login with Facebook
          </Button>
        </Col>
      </Row>
    </div>
  );
}
