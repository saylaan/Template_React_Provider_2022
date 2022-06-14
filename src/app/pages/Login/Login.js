import React from "react";
import { useNavigate } from "react-router-dom";

/* ------------- || Providers Imports || ------------- */
import useAuth from "../../providers/AuthenticationProvider";

/* ------------- || External Components Library || ------------- */
import { Form, Input, Button } from "antd";

const Login = () => {
  const navigate = useNavigate();
  const { Login, Register } = useAuth();

  const handleLogin = (values) => {
    Login(values).then(() => {
      navigate("/");
    });
  };

  const handleRegister = (values) => {
    Register(values).then(() => {
      navigate("/");
    });
  };

  return (
    <div>
      <div
        style={{
          margin: "auto",
          marginTop: "20%",
          width: "50%",
          padding: "2.2rem",
          backgroundColor: "#FFFFFF",
          borderRadius: "1rem",
        }}
      >
        <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={handleLogin}
          onFinishFailed={handleLogin}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
        <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={handleRegister}
          onFinishFailed={handleRegister}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
