import React from "react";
import Layout from "./Layout";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";

const Page404 = () => (
  <Layout title="" description="">
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button><Link to="/">Back Home</Link> </Button>}
    />
  </Layout>
);

export default Page404;
