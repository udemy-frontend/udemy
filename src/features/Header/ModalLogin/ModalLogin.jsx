import React, { useState } from "react";
import { Input, Form, Button, Modal, Typography, notification } from "antd";
import {
  UserOutlined,
  LockOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import udemylogo from "../../../assets/images/logo-coral.svg";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import google from "../../../assets/images/google.svg";
import { authenticate } from "../../../components/auth";
import { API } from "../../../config";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const ModalLogin = (props) => {
  const { modalLoginVisible, onCancelModalLogIn, modalSignUpVisible } = props;
  const [loading, setLoading] = useState(false);
 
  const onFinish = (values) => {
    return fetch(`${API}/signin`, {
      method: "POST",
      headers: {
        Accetp: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => {
        if (res.status === 200) {
          setLoading(true);

          const success = "Đăng nhập thành công !";
          openNotification("success", success);
          setTimeout(() => {
            onCancelModalLogIn();
          }, 1000);
        }
        return res.json();
      })
      .then((data) => {
        authenticate(data);
        if (data.error) {
          let chuoi = data.error;
          openNotification("error", chuoi);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });

    onCancelModalLogIn();
  };

  const openNotification = (type, chuoi) => {
    "error" === type
      ? notification[type]({
          message: "Error:",
          description: chuoi,
          duration: 2,
        })
      : notification[type]({
          message: "Success:",
          description: chuoi,
          duration: 2,
        });
  };
  const { t } = useTranslation();
  return (
    <Modal
      title="Log In to Your Udemy Account!"
      visible={modalLoginVisible}
      footer={null}
      onCancel={onCancelModalLogIn}
    >
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        className={styles.inputModal_Login}
      >
        <div className={styles.logo}>
          <a href="#a">
            <img src={udemylogo} alt="udemylogo" />
          </a>
        </div>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            type="email"
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item
          {...tailLayout}
          className={styles.setPaddingFormItem_modalLogin}
        >
          <Button
            className={styles.btnlogin}
            loading={loading}
            type="primary"
            htmlType="submit"
          >
            {t("login.1")}
          </Button>
        </Form.Item>

        <Form.Item
          {...tailLayout}
          className={styles.setPaddingFormItem_modalLogin}
        >
          <Button
            className={styles.btnSignUp}
            size="large"
            type="default"
            htmlType="submit"
          >
            <img src={google} alt="google" /> Google
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button
            className={styles.btnSignUp_FB}
            size="large"
            type="primary"
            htmlType="submit"
          >
            <FacebookOutlined /> FaceBook
          </Button>
        </Form.Item>

        <Form.Item
          {...tailLayout}
          className={styles.setPaddingFormItem_modalLogin}
        >
          <Typography>
            {t("or_password.1")} {t("or_password.2")}
          </Typography>
          <Typography>
            {t("dont_account.1")}{" "}
            <Button
              className={styles.setPadding_dont_account}
              onClick={() => onCancelModalLogIn(modalSignUpVisible())}
              type="link"
            >
              {" "}
              {t("dont_account.2")}
            </Button>
            {t("dont_account.3")}
          </Typography>
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default ModalLogin;
