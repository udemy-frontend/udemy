import React from "react";
import styles from "./styles.module.scss";

const Layout = ({
  title = "Title",
  description = "Description",
  className,
  children,
}) => (
  <div className={styles.setPaddingLayout}>
    <h2> {title} </h2>
    <p className="admin">{description}</p>

    <div>{children}</div>
  </div>
);

export default Layout;
