import React from "react";
import classes from "./Sidebar.module.css";
import Badge from "../Badge/Badge";
import PersonList from "../PersonList/PersonList";
import Search from "../Search/Search";

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebarTop}>
        <div className={classes.header}>
          <h3 className={classes.title}>
            Messages <Badge>4</Badge>
          </h3>
          <span>Show All</span>
        </div>
        <Search />
      </div>

      <PersonList />
    </div>
  );
};

export default Sidebar;
