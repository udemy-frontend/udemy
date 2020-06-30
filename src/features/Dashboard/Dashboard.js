import React from "react";
import Layout from "../../components/core/Layout";
import { isAuthenticated } from "../../components/auth";
import { PageHeader, Tabs, Button, Descriptions } from "antd";
//Statistic
const { TabPane } = Tabs;

const {
  user
} = isAuthenticated();

const renderContent = (column = 2) => (
  <Descriptions size="small" column={column}>

    <Descriptions.Item label="Name">{user && user.name  ? user.name : ''}</Descriptions.Item>
    <Descriptions.Item label="Id">
      <a>{user && user._id  ? user._id : ''}</a>
    </Descriptions.Item>
    <Descriptions.Item label="Email">{user && user.email  ? user.email : ''}</Descriptions.Item>
    <Descriptions.Item label="CreatAt Time">2017-01-10</Descriptions.Item>
    <Descriptions.Item label="Type">
      {user && user.role === 1 ? "Admin" : "Registered User"}
    </Descriptions.Item>
    <Descriptions.Item label="Purchase Time">...</Descriptions.Item>
  </Descriptions>
);

// const extraContent = (
//   <div
//     style={{
//       display: "flex",
//       width: "max-content",
//       justifyContent: "flex-end",
//     }}
//   >
//     <Statistic
//       title="Status"
//       value="Pending"
//       style={{
//         marginRight: 32,
//       }}
//     />
//     <Statistic title="Price" prefix="$" value={568.08} />
//   </div>
// );

const Content = ({ children, extra }) => {
  return (
    <div className="content">
      <div className="main">{children}</div>
      <div className="extra">{extra}</div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <Layout title="" description="">
      <div>
        <PageHeader
          className="site-page-header-responsive"
          onBack={() => window.history.back()}
          title="Information"
          // subTitle="This is a subtitle"
          extra={[
            <Button disabled key="3">
              Operation
            </Button>,
            <Button disabled key="2">
              Operation
            </Button>,
            <Button disabled key="1" type="primary">
              Primary
            </Button>,
          ]}
          footer={
            <Tabs defaultActiveKey="1">
              <TabPane tab="Details" key="1" />
              <TabPane tab="History" key="2" />
            </Tabs>
          }
        >
          {/* insert extraContent in <Content extra={extraContent}>{renderContent()}</Content> */}
          <Content>{renderContent()}</Content>
        </PageHeader>
      </div>
    </Layout>
  );
};

export default Dashboard;
