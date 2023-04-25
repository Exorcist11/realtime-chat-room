import React from "react";
import { Row, Col, Button, Typography } from "antd";
import firebase, { auth } from "../../firebase/config";

const { Title } = Typography;
const fbLogin = new firebase.auth.FacebookAuthProvider();

export default function Login() {
  let loginWithFacebook = () => {
    auth.signInWithPopup(fbLogin);
  };

  let loginWithGoogle = () => {
    alert("Login");
  };

  return (
    <div>
      <Row justify={"center"} style={{ height: 800 }}>
        <Col span={8}>
          <Title style={{ textAlign: "center" }} level={3}>
            Login chat room
          </Title>

          <Button
            style={{ width: "100%", marginBottom: 5 }}
            onClick={loginWithGoogle}
          >
            Login with Google
          </Button>

          <Button
            style={{ width: "100%", marginBottom: 5 }}
            onClick={loginWithFacebook}
          >
            Login with Facebook
          </Button>
        </Col>
      </Row>
    </div>
  );
}
