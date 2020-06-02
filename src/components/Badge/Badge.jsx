import React from "react";
import classes from "./Badge.module.css";

const Badge = ({ children }) => {
  return <span className={classes.badge}>{children}</span>;
};

export default Badge;
