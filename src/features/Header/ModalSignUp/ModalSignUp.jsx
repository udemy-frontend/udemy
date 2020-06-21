import React, { useState } from "react";
import { Input, Form, Button, Modal, Typography, notification } from "antd";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import { API } from "../../../config";
import udemylogo from "../../../assets/images/logo-coral.svg";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { creatNewUser } from "../../../components/Redux/actions";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const ModalSignUp = (props) => {
  const { modalSignUpVisible, onCancelModalSignUp } = props;
  const [loading, setLoading] = useState(false);

  const onSubmit = (values) => {
    setLoading(true);
    return fetch(`${API}/signup`, {
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
          const success = "Tạo tài khoản thành công !";
          openNotification("success", success);
          setTimeout(() => {
            onCancelModalSignUp(values);
          }, 2000);
        }
        return res.json();
      })
      .then((data) => {
        if (data.message) {
          let chuoi = data.message.slice(56);
          openNotification("error", chuoi);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
    onCancelModalSignUp();
  };

  const openNotification = (type, chuoi) => {
    if (type === "error") {
      notification[type]({
        message: "Error:",
        description: chuoi,
        duration: 2,
      });
    } else {
      notification[type]({
        message: "Success:",
        description: chuoi,
        duration: 2,
      });
    }
  };

  // Translation
  const { t } = useTranslation();
  return (
    <Modal
      title="Sign Up and Start Learning!"
      visible={modalSignUpVisible}
      footer={null}
      onCancel={onCancelModalSignUp}
    >
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onSubmit}
        className={styles.inputModal_Login}
      >
        <div className={styles.logo}>
          <a href="#a">
            <img src={udemylogo} alt="udemylogo" />
          </a>
        </div>

        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            type="text"
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            type="email"
            placeholder="Email"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
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
            {t("signup.1")}
          </Button>
        </Form.Item>

        <Form.Item
          {...tailLayout}
          className={styles.setPaddingFormItem_modalLogin}
        >
          <Typography>
            {t("already_account.1")}
            <Link to="/google"> {t("already_account.2")} </Link>
            {t("already_account.3")}
          </Typography>
        </Form.Item>
      </Form>
    </Modal>
  );
};
// const mapDispatchToProps = dispatch => bindActionCreators({ creatNewUser }, dispatch)
export default ModalSignUp;
