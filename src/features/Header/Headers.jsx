import {
  GlobalOutlined,
  ShoppingCartOutlined,
  UnorderedListOutlined,
  UserOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Col, Dropdown, Input, Layout, Menu, Row } from "antd";
//antd
import "antd/dist/antd.css";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
//images
import udemylogo from "../../assets/images/logo-coral.svg";
import ModalLogin from "./ModalLogin/ModalLogin";
import ModalSignUp from "./ModalSignUp/ModalSignUp";
//style
import styles from "./styles.module.scss";
// import { connect } from 'react-redux'
const { Header } = Layout;
const { SubMenu } = Menu;
const { Search } = Input;

const Headers = () => {
  const { t, i18n } = useTranslation();
  const [modalLoginVisible, setModalLoginVisible] = useState(false);
  const [modalSignUpVisible, setModalSignUpVisible] = useState(false);
  const [current, setCurrent] = useState("mail");

  const languageDropdown = (
    <Menu onClick={handleChangeLanguage}>
      <Menu.Item key="en">English</Menu.Item>
      <Menu.Item key="ja">Japanese</Menu.Item>
      <Menu.Item key="vi">VietNamese</Menu.Item>
    </Menu>
  );
  function handleChangeLanguage(lang) {
    i18n.changeLanguage(lang.key);
  }
  //modal login
  function showModalLogIn() {
    setModalLoginVisible(true);
  }
  function onCancelModalLogIn() {
    setModalLoginVisible(false);
  }
  //modal signup
  function showModalSignUp() {
    setModalSignUpVisible(true);
  }
  function onCancelModalSignUp(values) {
    setModalSignUpVisible(false);
    values.name = "";
    values.email = "";
    values.password = "";
  }
  function handleClick(e) {
    console.log("click ", e);
    setCurrent({
      current: e.key,
    });
  }
  return (
    <Layout className={styles.layout}>
      <ModalLogin
        modalLoginVisible={modalLoginVisible}
        onCancelModalLogIn={onCancelModalLogIn}
      />
      <ModalSignUp
        modalLoginVisible={modalLoginVisible}
        modalSignUpVisible={modalSignUpVisible}
        onCancelModalSignUp={onCancelModalSignUp}
      />
      <Header className={styles.header}>
        <Menu
          onClick={handleClick}
          // theme="dark"
          selectedKeys={[current]}
          mode="horizontal"
          className={styles.menuUdemy}
        >
          <Menu.Item key="mail">
            <div className={styles.logo}>
              <a href="#a">
                <img src={udemylogo} alt="udemylogo" />
              </a>
            </div>
          </Menu.Item>
          <SubMenu icon={<UnorderedListOutlined />} title="Menu">
            <Menu.ItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <Menu.Item>
            <Search
              className={styles.setWidthSearch}
              placeholder="Search for anything"
              onSearch={(value) => console.log(value)}
              // enterButton
            />
          </Menu.Item>
          <Menu.Item>
            <ShoppingCartOutlined style={{ fontSize: "20px" }} />
          </Menu.Item>
          <Menu.Item
            title="Log In"
            icon={<UserOutlined />}
            onClick={showModalLogIn}
          >
            {t("login.1")}
          </Menu.Item>
          <Menu.Item
            title="Sign Up"
            icon={<UserAddOutlined />}
            onClick={showModalSignUp}
          >
            {t("signup.1")}
          </Menu.Item>
          <Menu.Item className={styles.setColorBtnChangeLanguage} key="alipay">
            <Dropdown overlay={languageDropdown}>
              <Button type="link" shape="circle" onClick={handleChangeLanguage}>
                <GlobalOutlined style={{ fontSize: "20px" }} />
              </Button>
            </Dropdown>
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};

export default Headers;
